/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_USERS_TABLE_ID: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}