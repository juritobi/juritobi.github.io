from __future__ import annotations

import json
import sqlite3
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DB_PATH = ROOT / "portfolio.db"
PORTFOLIO_JSON = ROOT / "src" / "assets" / "portfolio.json"
EXPERIENCE_JSON = ROOT / "src" / "assets" / "db.json"


def as_bool(value):
    if isinstance(value, bool):
        return value
    if isinstance(value, (int, float)):
        return value != 0
    if isinstance(value, str):
        return value.strip().lower() in {"1", "true", "yes"}
    return bool(value)


def write_json(path: Path, data):
    path.write_text(
        json.dumps(data, indent=4, ensure_ascii=False) + "\n",
        encoding="utf-8-sig",
    )


def fetch_portfolio(cursor):
    rows = cursor.execute(
        """
        select
            id,
            title,
            subtitle,
            image,
            downloadLink,
            codeLink,
            language,
            platform,
            releaseDate,
            type,
            teamSize,
            display,
            videoLink,
            highlight,
            description
        from PortfolioCards
        order by releaseDate desc, id asc
        """
    ).fetchall()

    return [
        {
            "id": str(row[0]),
            "title": row[1],
            "subtitle": row[2],
            "image": row[3],
            "downloadLink": row[4],
            "codeLink": row[5],
            "language": row[6],
            "platform": row[7],
            "releaseDate": row[8],
            "type": str(row[9]),
            "teamSize": str(row[10]),
            "display": as_bool(row[11]),
            "videoLink": row[12],
            "highlight": as_bool(row[13]),
            "description": row[14],
        }
        for row in rows
    ]


def fetch_experience(cursor):
    rows = cursor.execute(
        """
        select
            id,
            start,
            end,
            organization,
            role,
            description,
            link
        from experience
        order by start asc, id asc
        """
    ).fetchall()

    return [
        {
            "id": str(row[0]),
            "start": row[1],
            "end": row[2],
            "organization": row[3],
            "role": row[4],
            "description": row[5],
            "link": row[6],
        }
        for row in rows
    ]


def main():
    if not DB_PATH.exists():
        raise SystemExit(f"Database not found: {DB_PATH}")

    conn = sqlite3.connect(DB_PATH)
    try:
        cursor = conn.cursor()
        write_json(PORTFOLIO_JSON, fetch_portfolio(cursor))
        write_json(EXPERIENCE_JSON, fetch_experience(cursor))
    finally:
        conn.close()


if __name__ == "__main__":
    main()
