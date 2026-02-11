---
layout: "../../../layouts/DocLayout.astro"
title: "Anbieter / <Name>"
url: "/anbieter/<slug>/"
chapter: "Anbieter"
type: "single"
format: "F4"
level: ""
money: "maybe"
status: "todo"          # todo | done
updated: "2026-01-05"
description: "Kurzprofil von <Name> (Kategorie: <Kategorie>)."
provider:
  name: "<Name>"
  category: "DNS"       # siehe src/data/anbieter-taxonomy.json
  website: ""

  # Optional (für OSS/Apps)
  repo: ""             # GitHub/GitLab/Codeberg …
  license: ""          # SPDX (z.B. MIT, Apache-2.0)

  # Offizielle Links (wenn vorhanden)
  policies:
    privacy: ""        # Privacy Policy
    terms: ""          # Terms/AGB
    transparency: ""   # Transparency Report
    warrant_canary: "" # Warrant Canary

  # Unabhängige Audits / Reviews (optional)
  audits: []            # Beispiel siehe unten

  # Kosten / Zugang
  pricing: ""          # free | freemium | paid | mixed | unknown
  free_tier: ""        # yes | no | unknown

  # Vertrauen / Eigenschaften
  open_source: ""      # yes | partial | no | unknown
  account_required: "" # yes | no | unknown
  phone_required: ""   # yes | no | unknown
  kyc_required: ""     # yes | no | unknown

  # Recht / Betrieb
  jurisdiction: ""     # z.B. "CH", "DE", "US" …

  # Datenhandling (kurz, damit man filtern und vergleichen kann)
  logs: ""             # none | minimal | configurable | unknown
  retention: ""        # z.B. "24h", "7d", "konfigurierbar"
  data_notes: ""       # Freitext: wichtige Einschränkungen / Besonderheiten

  # Inhalts-/Vergleichshilfen
  features: []
  alternatives: []

# Links/Belege (offizielle Seiten, Policies, Audits, Blogposts, Doku)
sources: []
---

## Kurzfazit (1 Minute)

TODO: Ein Satz, warum der Anbieter hier steht + für wen er passt.

## Für wen?

- TODO

## Was du prüfen solltest (Quick‑Checks)

- **Welche Daten fallen an?** (z. B. IP, Metadaten, Inhalte)
- **Logs & Retention?** (wie lange, wofür)
- **Konto nötig?** (E-Mail/Telefon/Identitätsnachweis)
- **Transparenz?** (Audit, Open Source, Reports)
- **Jurisdiktion & Betreiberwechsel?**

## Setup (kurz)

TODO: 3–7 Schritte oder ein Link zu deiner passenden Guide‑Seite.

## Alternativen

TODO: 2–5 Alternativen + wann besser.

## Audit‑Einträge (Beispiel)

> Tipp: Wenn du Audits einträgst, achte auf **Scope** (was wurde geprüft?) und **Datum**.

```yaml
provider:
  audits:
    - type: "security"     # security | privacy | code | pentest | other
      date: "2025-10-01"   # YYYY-MM-DD
      auditor: "<Firma/Person>"
      scope: "<kurz: was wurde geprüft?>"
      url: "https://..."
      notes: "<kurzes Ergebnis/Link auf Summary>"
```

## Quellen

TODO: Offizielle Policy/Docs + ggf. Audit/Blogposts.
