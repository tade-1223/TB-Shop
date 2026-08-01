from datetime import datetime, timedelta, timezone
from app.config import settings

from jose import jwt

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0YWRlc3NlYmVsYXk0NzdAZ21haWwuY29tIiwidXNlcl9pZCI6MiwiZXhwIjoxNzg1NTYzMTA1fQ.YaDlXw51FScNEtrkw5SMxJfUk4Y7GaANUFfOi23WaFI"   # paste the FULL token here

print(jwt.get_unverified_claims(token))

# ==========================
# JWT Configuration
# ==========================


SECRET_KEY = settings.SECRET_KEY
ALGORITHM = settings.ALGORITHM
ACCESS_TOKEN_EXPIRE_MINUTES = settings.ACCESS_TOKEN_EXPIRE_MINUTES


# ==========================
# Create JWT Token
# ==========================

def create_access_token(data: dict):
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )

    to_encode.update({
        "exp": expire,
    })

    token = jwt.encode(
        to_encode,
        SECRET_KEY,
        algorithm=ALGORITHM,
    )

    return token


# ==========================
# Verify JWT Token
# ==========================

def verify_token(token: str):
    try:
        payload = jwt.decode(
            token,
            SECRET_KEY,
            algorithms=[ALGORITHM],
        )

        return payload

    except JWTError as e:
        print("=" * 60)
        print("TOKEN:")
        print(token)
        print("JWT ERROR:")
        print(type(e).__name__)
        print(str(e))
        print("=" * 60)

        raise