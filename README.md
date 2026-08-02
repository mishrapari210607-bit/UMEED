# UMEED

UMEED stands for Unified Emergency Management, Evacuation and Displacement. This project is a disaster response and rescue coordination workspace with a Vite React landing page, imported static dashboard pages, and backend projects preserved from the provided zip files.

## Stack

- React + Vite frontend
- Plain CSS
- Imported static HTML/CSS/JS modules under `public/legacy`
- Starter FastAPI backend under `backend`
- Imported Django backend projects under `backend/django`

## Project Structure

```text
umeed/
+-- src/                         # Main React landing page source
+-- public/legacy/               # Imported static frontend pages
|   +-- disaster-rescue-management/
|   +-- id-generation/
+-- backend/
|   +-- app.py                   # Starter FastAPI backend
|   +-- routes/
|   +-- services/
|   +-- database/
|   +-- django/                  # Imported Django backend projects
|       +-- hazard_map_project/
|       +-- disaster_rescue_management/
|       +-- id_generation/
+-- package.json
+-- vite.config.js
```

## Run the Frontend

From the project folder:

```bash
cd "C:\Users\Pari Mishra\OneDrive\Desktop\umeed"
npm install
npm run dev
```

Open:

```text
http://127.0.0.1:5173/
```

## Main Pages

Landing page:

```text
http://127.0.0.1:5173/
```

Imported disaster rescue dashboard:

```text
http://127.0.0.1:5173/legacy/disaster-rescue-management/index.html
```

Imported rescue ID generator:

```text
http://127.0.0.1:5173/legacy/id-generation/index.html
```

## Imported Modules

The files from the zip projects were arranged like this:

```text
hazard-map copy.zip
+-- backend/django/hazard_map_project/

disaster-rescue-management.zip
+-- backend/django/disaster_rescue_management/
+-- public/legacy/disaster-rescue-management/

umeed.zip(drid gneration).zip
+-- backend/django/id_generation/
+-- public/legacy/id-generation/
```

## Frontend Build

To check that the React app builds:

```bash
npm run build
```

## Run the Starter FastAPI Backend

The starter FastAPI backend is separate from the imported Django backends.

```bash
cd "C:\Users\Pari Mishra\OneDrive\Desktop\umeed\backend"
pip install -r requirements.txt
uvicorn app:app --reload
```

Default backend URL:

```text
http://127.0.0.1:8000/
```

## Django Backends

The imported Django projects are preserved under:

```text
backend/django/
```

Each Django backend has its own `manage.py` and settings. They are not yet merged into one backend server.

Example:

```bash
cd "C:\Users\Pari Mishra\OneDrive\Desktop\umeed\backend\django\id_generation"
python manage.py runserver
```

Use the matching Python and Django dependencies for each imported project if you want to run them independently.

## Notes

- `node_modules/` and `dist/` are generated folders and should not be committed.
- The imported frontend pages are served by Vite from `public/legacy/`.
- The landing page cards and partner chips link to the imported modules.
