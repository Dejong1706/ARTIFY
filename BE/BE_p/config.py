from functools import lru_cache
from pydantic_settings import BaseSettings, SettingsConfigDict

class Settings(BaseSettings):
    model_config = SettingsConfigDict(
        env_file="./environment/.env",
        env_file_encoding="utf-8",
    )
    OPENAI_API_KEY : str

@lru_cache
def get_settings():
    return Settings()