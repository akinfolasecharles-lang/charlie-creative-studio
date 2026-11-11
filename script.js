
/* CLICKABLE SERVICE AND PROJECT CARDS */

.service-card,
.project-card {
  display: block;
  text-decoration: none;
  color: var(--white);
  cursor: pointer;
}

.service-card h3,
.project-card h3 {
  transition: color 0.3s ease;
}

.service-card:hover h3,
.project-card:hover h3 {
  color: var(--gold);
}

/* PREVENT STICKY NAVIGATION FROM
   COVERING THE DESTINATION SECTION */

section[id] {
  scroll-margin-top: 95px;
}

/* DETAIL PAGE DESIGN */

.detail-page {
  min-height: 70vh;
  padding: 100px 8%;
  background: var(--black);
}

.detail-page h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(40px, 6vw, 72px);
  line-height: 1.2;
  margin-bottom: 25px;
}

.detail-page h1 em {
  color: var(--gold);
  font-style: normal;
}

.detail-page .detail-description {
  color: var(--muted);
  max-width: 700px;
  font-size: 16px;
  margin-bottom: 30px;
}

.detail-label {
  color: var(--gold);
  font-size: 11px;
  letter-spacing: 3px;
  margin-bottom: 20px;
}

.detail-features {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
  margin: 45px 0;
  max-width: 850px;
}

.detail-feature {
  background: var(--card);
  border: 1px solid var(--border);
  padding: 25px;
}

.detail-feature h3 {
  color: var(--gold);
  margin-bottom: 10px;
}

.detail-feature p {
  color: var(--muted);
  font-size: 13px;
}

.detail-back {
  display: inline-block;
  margin-top: 20px;
  color: var(--gold);
  font-size: 14px;
}

@media (max-width: 600px) {
  .detail-page {
    padding: 75px 6%;
  }

  .detail-features {
    grid-template-columns: 1fr;
  }
}
