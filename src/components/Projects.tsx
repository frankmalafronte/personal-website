import styles from "./Projects.module.css";

function isRealVideoId(id: string) {
  return !/^placeholder/.test(id);
}

const PROJECTS = [
  {
    title: "Design QA",
    description: "An Agent to perform a visual checkout",
    videoId: "qh27cIgD83g",
    repoUrl: "https://github.com/frankmalafronte/qaSkills",
  },
];

export default function Projects() {
  return (
    <div className={styles.section}>
      <h1 className={styles.title}>Projects</h1>
      <div className={styles.grid}>
        {PROJECTS.map((p) => (
          <div key={p.title} className={styles.card}>
            <h2>{p.title}</h2>
            <p>{p.description}</p>
            {p.repoUrl && (
              <a href={p.repoUrl} target="_blank" rel="noopener noreferrer">View Repo</a>
            )}
            {p.videoId && isRealVideoId(p.videoId) && (
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${p.videoId}`}
                title={p.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
