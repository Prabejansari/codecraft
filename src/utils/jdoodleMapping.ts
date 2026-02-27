// JDoodle language mapping
const JDOODLE_LANGUAGE_MAPPING = {
  javascript: "nodejs",
  typescript: "nodejs", // TypeScript runs as Node.js
  python: "python3",
  java: "java",
  cpp: "cpp17",
  c: "c",
  go: "go",
  rust: "rust",
  php: "php",
  ruby: "ruby",
  swift: "swift",
  kotlin: "kotlin",
  csharp: "csharp",
  dart: "dart",
  r: "r",
  sql: "sql",
  bash: "bash",
  perl: "perl",
  scala: "scala",
  haskell: "haskell",
  lua: "lua",
  elixir: "elixir",
};

// Default version indices for each language
const JDOODLE_VERSION_INDICES = {
  nodejs: "4", // Latest Node.js
  python3: "4", // Latest Python 3
  java: "4", // Latest Java
  cpp17: "0", // C++17
  c: "0", // C
  go: "3", // Latest Go
  rust: "0", // Latest Rust
  php: "3", // Latest PHP
  ruby: "3", // Latest Ruby
  swift: "3", // Latest Swift
  kotlin: "2", // Latest Kotlin
  csharp: "2", // Latest C#
  dart: "2", // Latest Dart
  r: "2", // Latest R
  sql: "0", // SQL
  bash: "0", // Bash
  perl: "0", // Perl
  scala: "2", // Latest Scala
  haskell: "0", // Haskell
  lua: "0", // Lua
  elixir: "0", // Elixir
};

export function getJdoodleLanguage(language: string) {
  return JDOODLE_LANGUAGE_MAPPING[language as keyof typeof JDOODLE_LANGUAGE_MAPPING] || "nodejs";
}

export function getJdoodleVersionIndex(language: string) {
  const jdoodleLang = getJdoodleLanguage(language);
  return JDOODLE_VERSION_INDICES[jdoodleLang as keyof typeof JDOODLE_VERSION_INDICES] || "0";
}
