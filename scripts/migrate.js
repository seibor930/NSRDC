const { Client } = require('pg');
const fs = require('fs');
const path = require('path');

async function run() {
  const client = new Client({
    host: 'db.yaynxfxbmcghhxxqhkfq.supabase.co',
    port: 5432,
    database: 'postgres',
    user: 'postgres',
    password: 'ezcYX5185A9fSMPp',
    ssl: { rejectUnauthorized: false }
  });

  try {
    console.log('Connecting to Supabase PostgreSQL database...');
    await client.connect();
    console.log('Connected successfully to Supabase DB!');

    // Read schema.sql
    const sqlPath = path.join(__dirname, '../supabase/schema.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    console.log('Executing schema.sql...');
    await client.query(sql);
    console.log('Schema executed successfully!');

    // Verify tables
    const res = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
      ORDER BY table_name;
    `);
    console.log('Public tables confirmed in Supabase:');
    res.rows.forEach(r => console.log(' - ' + r.table_name));

    // Seed courses from courses.json
    const rawCourses = JSON.parse(fs.readFileSync('C:/Users/USER/.gemini/antigravity-ide/brain/f887969b-cf0f-467b-afda-2689d9b8a0ab/scratch/courses.json', 'utf8'));
    console.log('Seeding ' + rawCourses.length + ' courses into public.courses...');

    const getCategory = (tag, slug, title) => {
      const t = (tag + ' ' + slug + ' ' + title).toLowerCase();
      if (t.includes('cbt') || t.includes('psycholog') || t.includes('mental')) return 'psy';
      if (t.includes('nurs') || t.includes('patient') || (t.includes('health') && !t.includes('occupational'))) return 'health';
      if (t.includes('hr') || t.includes('human resource') || t.includes('administration')) return 'human';
      if (t.includes('teach') || (t.includes('edu') && !t.includes('psychology'))) return 'edu';
      if (t.includes('hospitality') || t.includes('homestay') || t.includes('tourism')) return 'hospi';
      if (t.includes('environment') || t.includes('waste') || t.includes('circular') || t.includes('sustain')) return 'env';
      if (t.includes('icosh') || t.includes('occupational') || t.includes('safety')) return 'occu';
      if (t.includes('leadership') || t.includes('decision')) return 'leader';
      return 'human';
    };

    for (const c of rawCourses) {
      if (c.slug === 'leadershi') continue;
      const level = c.title.toLowerCase().includes('advanced diploma') ? 'Advanced Diploma' : c.title.toLowerCase().includes('diploma') ? 'Diploma' : 'Certificate';
      const tuition = level === 'Advanced Diploma' ? 1190 : level === 'Diploma' ? 790 : 490;
      const credits = level === 'Advanced Diploma' ? '20 ECTS' : level === 'Diploma' ? '15 ECTS' : '10 ECTS';
      const category = getCategory(c.tag || '', c.slug || '', c.title || '');

      await client.query(`
        INSERT INTO public.courses (slug, title, tag, category, level, duration, enrollment, mode, accreditation, credits, tuition, description, overview, outcomes, phases)
        VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
        ON CONFLICT (slug) DO UPDATE SET 
          title = EXCLUDED.title,
          tag = EXCLUDED.tag,
          category = EXCLUDED.category,
          level = EXCLUDED.level,
          tuition = EXCLUDED.tuition,
          description = EXCLUDED.description,
          overview = EXCLUDED.overview,
          outcomes = EXCLUDED.outcomes,
          phases = EXCLUDED.phases;
      `, [
        c.slug,
        c.title,
        c.tag || 'Professional Certification',
        category,
        level,
        'Self-paced (6–12 weeks)',
        'Year-round Flexible',
        '100% Online Virtual Campus',
        'AISCP Accredited',
        credits,
        tuition,
        c.description || 'Master industry-aligned competencies backed by American International standards.',
        c.overview || 'Comprehensive curriculum backed by the AISCP.',
        JSON.stringify(c.outcomes),
        JSON.stringify(c.phases)
      ]);
    }
    console.log('Successfully seeded all courses into Supabase!');

    // Check certificates
    const certCount = await client.query('SELECT count(*) FROM public.certificates;');
    console.log('Verified certificates in DB:', certCount.rows[0].count);

  } catch (err) {
    console.error('Database error:', err);
  } finally {
    await client.end();
  }
}

run();
