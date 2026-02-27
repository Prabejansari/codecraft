// Judge0 language ID mapping
const JUDGE0_LANGUAGE_IDS = {
  javascript: 63,    // JavaScript (Node.js)
  python: 71,        // Python 3
  typescript: 63,    // TypeScript (compiled to JS)
  java: 62,          // Java
  cpp: 54,           // C++
  c: 50,             // C
  go: 60,            // Go
  rust: 73,          // Rust
  php: 68,           // PHP
  ruby: 72,          // Ruby
  swift: 83,         // Swift
  kotlin: 77,        // Kotlin
  csharp: 51,        // C#
  dart: 78,          // Dart
  r: 80,             // R
  sql: 82,           // SQL
  bash: 45,          // Bash
  perl: 54,          // Perl
  scala: 81,         // Scala
  haskell: 61,       // Haskell
  lua: 64,           // Lua
  elixir: 79,        // Elixir
  nasm: 86,          // NASM
};

export function getJudge0LanguageId(language: string): number {
  return JUDGE0_LANGUAGE_IDS[language as keyof typeof JUDGE0_LANGUAGE_IDS] || 63; // Default to JavaScript
}
