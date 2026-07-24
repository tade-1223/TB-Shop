from fastapi import FastAPI

app = FastAPI(
    title="TB-Shop API",
    version="1.0.0",
    description="Backend API for the TB-Shop E-commerce System"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to TB-Shop API 🚀"
    }