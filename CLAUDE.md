# Mission

Ce dépôt pilote un **portefeuille de sites web spécialisés monétisés par affiliation, publicité
display et produits numériques Etsy**. Ce n'est pas une agence qui livre des sites à des clients
(voir le dépôt `site-web-` pour ça) : ici, chaque site est un actif que le propriétaire du dépôt
possède et exploite lui-même.

Priorité absolue, dans cet ordre : **1) revenus d'affiliation, 2) revenus publicitaires
display, 3) revenus Etsy.** Pinterest et le SEO Google sont les deux canaux d'acquisition de
trafic ; YouTube n'est qu'un canal de renvoi opportuniste vers les sites (les vidéos existent déjà
et sont gérées ailleurs — ne pas produire de stratégie YouTube ici).

Modèle pour chaque site : **SEO Google → Pinterest → Blog → Publicité display → Affiliation →
Produits numériques Etsy.**

## Où trouver quoi

- `strategie/01-strategie-globale.md` — analyse de marché, sélection des niches, architecture du
  portefeuille, automatisation, KPI, risques, priorités. Document de référence, à relire avant
  toute décision stratégique.
- `strategie/02-*.md`, `03-*.md`, `04-*.md` — un document par site : arborescence SEO complète,
  clusters de contenu, plan éditorial priorisé, stratégie Pinterest, catalogue Etsy, programmes
  d'affiliation retenus.
- `sites/<nom-du-site>/` — code du site une fois le développement démarré (un dossier par site,
  jamais de mélange entre deux sites).

## Hypothèse structurante à valider en premier

Les sites du portefeuille ciblent le **marché anglophone (US/UK)**, pas le marché francophone.
Raison : marché Pinterest, Etsy et affiliation infiniment plus profond, RPM publicitaire
3 à 5 fois plus élevé qu'en France, programmes d'affiliation plus nombreux et mieux rémunérés.
C'est documenté et justifié dans `strategie/01-strategie-globale.md`. Si cette hypothèse est
rejetée, toute la stratégie éditoriale (mots-clés, ton, plateformes) doit être retraduite en
français et les volumes de recherche redimensionnés à la baisse.

## Stack technique recommandée

Réutiliser une version allégée du `starter/` Next.js du dépôt `site-web-` (déjà équipé SEO
complet : sitemap, JSON-LD, OG images) plutôt que WordPress : le propriétaire maîtrise déjà cette
stack, elle permet des Core Web Vitals excellents (facteur de ranking Pinterest et Google), et
un déploiement Vercel gratuit en phase de démarrage. Retirer tout ce qui est spécifique SaaS
(Stripe, dashboard client, multi-tenant) et garder : MDX/CMS pour le blog, sitemap + JSON-LD,
formulaire de capture email, intégration Pinterest/GA4.

## Règles

- Un site = un dossier sous `sites/`, un domaine, un compte Pinterest, une marque. Jamais de
  mélange de niches dans un même site.
- Contenu toujours original, utile, écrit ou vérifié par un humain — l'IA assiste la recherche et
  le brouillon, jamais la publication brute (risque Google Helpful Content / E-E-A-T).
- Toute recommandation d'affiliation doit être divulguée conformément à la FTC (US) et à la
  réglementation applicable — mention claire en haut de chaque article monétisé.
- Avant de choisir une nouvelle niche : appliquer la grille de notation `/100` du document
  `01-strategie-globale.md` (demande, concurrence accessible, potentiel SEO/Pinterest/
  affiliation/Etsy, durabilité, intention d'achat).
