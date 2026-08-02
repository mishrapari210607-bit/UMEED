from fastapi import FastAPI

from routes import disaster, id, migration, supply

app = FastAPI(title="UMEED API")

app.include_router(disaster.router, prefix="/disaster", tags=["disaster"])
app.include_router(id.router, prefix="/id", tags=["id"])
app.include_router(migration.router, prefix="/migration", tags=["migration"])
app.include_router(supply.router, prefix="/supply", tags=["supply"])


@app.get("/")
def health_check():
    return {"status": "ok", "service": "UMEED API"}
