import Link from "next/link";
import resume from "@/data/resume.json";
import styles from "./page.module.css";

function formatDate(val: string): string {
  if (val.includes('-')) {
    const [year, month] = val.split('-');
    return new Date(Number(year), Number(month) - 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  }
  return val;
}

const SKILL_LABELS: Record<string, string> = {
  aiAndAgents: 'AI & Agents',
  testAutomation: 'Test Automation',
  languages: 'Languages',
  mobileAndFrontend: 'Mobile & Frontend',
  devOpsAndTools: 'DevOps & Tools',
};

export default function ResumePage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.back}>← Back</Link>
      </nav>

      {/* Header */}
      <header className={styles.header}>
        <h1>{resume.name}</h1>
        <p>{resume.title}</p>
        <div className={styles.contact}>
          <span>{resume.contact.location}</span>
          <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>
          <a href={`https://${resume.contact.linkedin}`} target="_blank" rel="noopener noreferrer">{resume.contact.linkedin}</a>
        </div>
      </header>

      {/* Summary */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Summary</h2>
        <p className={styles.summary}>{resume.summary}</p>
      </section>

      <hr className={styles.divider} />

      {/* Experience */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        {resume.experience.map((job, i) => (
          <div key={i} className={styles.job}>
            <div className={styles.jobHeader}>
              <span className={styles.jobTitle}>{job.title}</span>
              <span className={styles.jobDates}>
                {formatDate(job.start)} – {job.end ? formatDate(job.end) : 'Present'}
              </span>
            </div>
            <p className={styles.jobCompany}>{job.company}, {job.location}</p>
            <ul className={styles.bullets}>
              {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>

      <hr className={styles.divider} />

      {/* Skills */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skillGroups}>
          {(Object.keys(SKILL_LABELS) as (keyof typeof resume.technicalSkills)[]).map((key) => (
            <div key={key} className={styles.skillRow}>
              <span className={styles.skillLabel}>{SKILL_LABELS[key]}</span>
              <span className={styles.skillValues}>{resume.technicalSkills[key].join(', ')}</span>
            </div>
          ))}
        </div>
      </section>

      <hr className={styles.divider} />

      {/* Education */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        {resume.education.map((edu, i) => (
          <div key={i} className={styles.eduItem}>
            <p className={styles.eduName}>{edu.institution}</p>
            <p className={styles.eduDetail}>
              {'degree' in edu ? edu.degree : edu.program}
              {' · '}{edu.location}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}
