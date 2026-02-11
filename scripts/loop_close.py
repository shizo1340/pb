from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[1]
PAGES = ROOT / 'src' / 'pages'

# Chapters (top-level) that should receive the loop block
CHAPTERS = [
    'altgeraete',
    'bedrohungen',
    'browser',
    'cloud-backup',
    'daten-spuren',
    'datenschutz',
    'geraete',
    'ki',
    'kommunikation',
    'konten-login',
    'metadaten',
    'notfall',
    'recht-eu-de',
    'smart-home-iot',
    'smartphones',
    'social-media',
    'tracking-werbung',
]

# Curated per-chapter recommendations (internal links)
REC = {
    'konten-login': {
        'tools': [
            ('Passwortmanager einrichten', '/tools/passwortmanager-einrichten/'),
            ('2FA einrichten', '/tools/2fa-setup/'),
            ('E-Mail Aliase nutzen', '/tools/email-alias-setup/'),
        ],
        'tests': [
            ('E-Mail testen (Tracking & Aliase)', '/tests/email/'),
            ('Browser testen (Leaks & Cookies)', '/tests/browser/'),
        ],
        'anbieter': [
            ('1Password', '/anbieter/1password/'),
            ('Bitwarden', '/anbieter/bitwarden/'),
            ('KeePassXC', '/anbieter/keepassxc/'),
            ('2FAS', '/anbieter/2fas/'),
            ('Aegis', '/anbieter/aegis/'),
        ],
    },
    'tracking-werbung': {
        'tools': [
            ('uBlock Origin Setup', '/tools/ublock-origin-setup/'),
            ('DNS Setup', '/tools/dns-setup/'),
            ('Browser Profile/Container', '/tools/browser-profile-container/'),
        ],
        'tests': [
            ('Browser testen (Tracking-Schutz)', '/tests/browser/'),
            ('DNS testen (Resolver/DoH/VPN)', '/tests/dns/'),
        ],
        'anbieter': [
            ('AdGuard', '/anbieter/adguard/'),
            ('AdGuard DNS', '/anbieter/adguard-dns/'),
            ('NextDNS', '/anbieter/nextdns/'),
            ('LibreWolf', '/anbieter/librewolf/'),
            ('Brave', '/anbieter/brave/'),
        ],
    },
    'browser': {
        'tools': [
            ('Browser Profile/Container', '/tools/browser-profile-container/'),
            ('uBlock Origin Setup', '/tools/ublock-origin-setup/'),
            ('DNS Setup', '/tools/dns-setup/'),
        ],
        'tests': [
            ('Browser testen (Leaks & Isolation)', '/tests/browser/'),
            ('DNS testen (Resolver/DoH)', '/tests/dns/'),
        ],
        'anbieter': [
            ('LibreWolf', '/anbieter/librewolf/'),
            ('Brave', '/anbieter/brave/'),
            ('Tor Browser', '/anbieter/tor-browser/'),
            ('Mullvad Browser', '/anbieter/mullvad-browser/'),
        ],
    },
    'daten-spuren': {
        'tools': [
            ('E-Mail Aliase nutzen', '/tools/email-alias-setup/'),
            ('Browser Profile/Container', '/tools/browser-profile-container/'),
            ('Secure Delete', '/tools/secure-delete/'),
        ],
        'tests': [
            ('E-Mail testen (Trackingpixel)', '/tests/email/'),
            ('Browser testen (Leaks)', '/tests/browser/'),
        ],
        'anbieter': [
            ('addy.io', '/anbieter/addy-io/'),
            ('33Mail', '/anbieter/33mail/'),
            ('SimpleLogin', '/anbieter/simplelogin/'),
            ('AnonAddy', '/anbieter/anonaddy/'),
        ],
    },
    'metadaten': {
        'tools': [
            ('Fotos & Metadaten', '/tools/fotos-metadaten/'),
            ('Cloud Sharing Audit', '/tools/cloud-sharing-audit/'),
            ('Secure Delete', '/tools/secure-delete/'),
        ],
        'tests': [
            ('App-Tracker testen (Permissions)', '/tests/app-tracker/'),
        ],
        'anbieter': [
            ('Cryptomator', '/anbieter/cryptomator/'),
        ],
    },
    'smartphones': {
        'tools': [
            ('Geräte-Verschlüsselung checken', '/tools/geraete-verschluesselung-check/'),
            ('Passwortmanager einrichten', '/tools/passwortmanager-einrichten/'),
            ('2FA einrichten', '/tools/2fa-setup/'),
        ],
        'tests': [
            ('App-Tracker testen', '/tests/app-tracker/'),
        ],
        'anbieter': [
            ('GrapheneOS', '/anbieter/grapheneos/'),
            ('CalyxOS', '/anbieter/calyxos/'),
            ('Aegis', '/anbieter/aegis/'),
        ],
    },
    'geraete': {
        'tools': [
            ('Geräte-Verschlüsselung checken', '/tools/geraete-verschluesselung-check/'),
            ('Secure Delete', '/tools/secure-delete/'),
            ('Passwortmanager einrichten', '/tools/passwortmanager-einrichten/'),
        ],
        'tests': [
            ('App-Tracker testen', '/tests/app-tracker/'),
        ],
        'anbieter': [
            ('Bitwarden', '/anbieter/bitwarden/'),
            ('KeePassXC', '/anbieter/keepassxc/'),
        ],
    },
    'altgeraete': {
        'tools': [
            ('Secure Delete', '/tools/secure-delete/'),
            ('Geräte-Verschlüsselung checken', '/tools/geraete-verschluesselung-check/'),
        ],
        'tests': [
            ('Browser testen', '/tests/browser/'),
        ],
        'anbieter': [
            ('BleachBit', '/anbieter/bleachbit/'),
            ('VeraCrypt', '/anbieter/veracrypt/'),
        ],
    },
    'cloud-backup': {
        'tools': [
            ('Cloud Sharing Audit', '/tools/cloud-sharing-audit/'),
            ('Fotos & Metadaten', '/tools/fotos-metadaten/'),
            ('Secure Delete', '/tools/secure-delete/'),
        ],
        'tests': [
            ('Browser testen (Sharing/Permissions)', '/tests/browser/'),
        ],
        'anbieter': [
            ('Cryptomator', '/anbieter/cryptomator/'),
            ('Backblaze', '/anbieter/backblaze/'),
            ('Dropbox', '/anbieter/dropbox/'),
        ],
    },
    'kommunikation': {
        'tools': [
            ('Signal Basics', '/tools/signal-basics/'),
            ('2FA einrichten', '/tools/2fa-setup/'),
        ],
        'tests': [
            ('App-Tracker testen', '/tests/app-tracker/'),
        ],
        'anbieter': [
            ('Signal', '/anbieter/signal/'),
            ('Threema', '/anbieter/threema/'),
            ('SimpleX', '/anbieter/simplex-chat/'),
        ],
    },
    'social-media': {
        'tools': [
            ('Browser Profile/Container', '/tools/browser-profile-container/'),
            ('E-Mail Aliase nutzen', '/tools/email-alias-setup/'),
            ('Fotos & Metadaten', '/tools/fotos-metadaten/'),
            ('uBlock Origin Setup', '/tools/ublock-origin-setup/'),
        ],
        'tests': [
            ('Browser testen', '/tests/browser/'),
            ('E-Mail testen', '/tests/email/'),
        ],
        'anbieter': [
            ('addy.io', '/anbieter/addy-io/'),
            ('33Mail', '/anbieter/33mail/'),
        ],
    },
    'smart-home-iot': {
        'tools': [
            ('DNS Setup', '/tools/dns-setup/'),
            ('Geräte-Verschlüsselung checken', '/tools/geraete-verschluesselung-check/'),
        ],
        'tests': [
            ('DNS testen', '/tests/dns/'),
            ('App-Tracker testen', '/tests/app-tracker/'),
        ],
        'anbieter': [
            ('AdGuard Home', '/anbieter/adguard-home/'),
            ('NextDNS', '/anbieter/nextdns/'),
        ],
    },
    'notfall': {
        'tools': [
            ('Passwortmanager einrichten', '/tools/passwortmanager-einrichten/'),
            ('2FA einrichten', '/tools/2fa-setup/'),
            ('Geräte-Verschlüsselung checken', '/tools/geraete-verschluesselung-check/'),
            ('Secure Delete', '/tools/secure-delete/'),
        ],
        'tests': [
            ('E-Mail testen', '/tests/email/'),
            ('Browser testen', '/tests/browser/'),
        ],
        'anbieter': [
            ('Bitwarden', '/anbieter/bitwarden/'),
            ('2FAS', '/anbieter/2fas/'),
        ],
    },
    'bedrohungen': {
        'tools': [
            ('Plan erstellen (Wizard)', '/start/wizard/'),
            ('Browser Profile/Container', '/tools/browser-profile-container/'),
        ],
        'tests': [
            ('Browser testen', '/tests/browser/'),
        ],
        'anbieter': [],
    },
    'datenschutz': {
        'tools': [
            ('E-Mail Aliase nutzen', '/tools/email-alias-setup/'),
            ('Cloud Sharing Audit', '/tools/cloud-sharing-audit/'),
        ],
        'tests': [
            ('E-Mail testen', '/tests/email/'),
        ],
        'anbieter': [],
    },
    'recht-eu-de': {
        'tools': [
            ('Plan erstellen (Wizard)', '/start/wizard/'),
        ],
        'tests': [
            ('Tests Hub', '/tests/'),
        ],
        'anbieter': [],
    },
    'ki': {
        'tools': [
            ('Browser Profile/Container', '/tools/browser-profile-container/'),
            ('uBlock Origin Setup', '/tools/ublock-origin-setup/'),
        ],
        'tests': [
            ('Browser testen', '/tests/browser/'),
        ],
        'anbieter': [
            ('DuckDuckGo', '/anbieter/duckduckgo/'),
            ('Brave Search', '/anbieter/brave-search/'),
        ],
    },
}

BLOCK_HEADER = "\n\n---\n\n## Weiter: Umsetzen & prüfen\n\n**Plan:** [Plan erstellen](/start/wizard/)\n"


def exists(url: str) -> bool:
    # map url to file existence for internal pages in src/pages
    # provider pages live under /anbieter/<slug>/ => src/pages/anbieter/<slug>/index.md
    # tool pages: /tools/<slug>/
    parts = [p for p in url.strip('/').split('/') if p]
    if not parts:
        return False
    # handle direct hubs like /tests/
    p = PAGES.joinpath(*parts)
    if p.is_dir():
        return (p / 'index.md').exists() or (p / 'index.astro').exists()
    # in case of .md direct
    if p.with_suffix('.md').exists():
        return True
    # handle hub pages that are md file directly under pages (e.g. index.md at root) not needed
    return False


def make_list(items):
    lines = []
    for label, url in items:
        if exists(url):
            lines.append(f"- [{label}]({url})")
    return "\n".join(lines)


def build_block(chapter: str) -> str:
    rec = REC.get(chapter, {})
    tools = rec.get('tools', [])
    tests = rec.get('tests', [])
    anbieter = rec.get('anbieter', [])

    out = [BLOCK_HEADER]

    tool_list = make_list(tools)
    test_list = make_list(tests)
    anbieter_list = make_list(anbieter)

    if tool_list:
        out.append("\n\n### Umsetzen (Tools)\n" + tool_list)
    if test_list:
        out.append("\n\n### Prüfen (Tests)\n" + test_list)
    if anbieter_list:
        out.append("\n\n### Anbieter (wenn du Optionen vergleichen willst)\n" + anbieter_list)

    # Always add a final hint line
    out.append("\n\n> Tipp: Ändere immer nur **eine Sache** und prüfe danach mit **einem Test**.\n")
    return "".join(out)


def already_has_block(text: str) -> bool:
    return '## Weiter: Umsetzen & prüfen' in text


def main():
    changed = []
    skipped = []
    for chapter in CHAPTERS:
        md_path = PAGES / chapter / 'index.md'
        if not md_path.exists():
            skipped.append((chapter, 'missing'))
            continue
        text = md_path.read_text(encoding='utf-8')
        if already_has_block(text):
            skipped.append((chapter, 'already'))
            continue
        # append
        block = build_block(chapter)
        # ensure file ends with newline
        if not text.endswith('\n'):
            text += '\n'
        text += block
        md_path.write_text(text, encoding='utf-8')
        changed.append(chapter)

    # write a small log
    log = ROOT / 'CHANGELOG-loop-close.md'
    lines = ["# Loop schließen - Kapitel zu Tools/Tests/Anbieter verlinkt", "", "Geändert:", ""]
    for c in changed:
        lines.append(f"- {c}/index.md")
    if skipped:
        lines += ["", "Übersprungen:"]
        for c, r in skipped:
            lines.append(f"- {c}: {r}")
    log.write_text("\n".join(lines) + "\n", encoding='utf-8')

    print(f"changed {len(changed)} chapters")


if __name__ == '__main__':
    main()
