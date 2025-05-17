import LogicLexer from "./generated/LogicLexer.js";
import LogicParser from "./generated/LogicParser.js";
import { CustomLogicVisitor } from "./CustomLogicVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import fs from "fs";

async function main() {
  let content;
  try {
    content = fs.readFileSync("input.txt", "utf8");
  } catch (error) {
    console.error("No se pudo leer el archivo input.txt");
    return;
  }

  // Normalizar operadores lógicos
  content = content
    .replace(/⇒|→/g, "→")
    .replace(/∨/g, "∨")
    .replace(/∧/g, "∧")
    .replace(/¬/g, "¬");

  // Crear stream y lexer solo para tokens
  const inputStreamForTokens = CharStreams.fromString(content);
  const lexerForTokens = new LogicLexer(inputStreamForTokens);
  lexerForTokens.reset();

  // Mostrar tabla de tokens y lexemas
  let token = lexerForTokens.nextToken();

  console.log("\nTabla de Tokens y Lexemas:");
  console.log("--------------------------------------------------");
  console.log("| Lexema         | Token                         |");
  console.log("--------------------------------------------------");

  while (token.type !== antlr4.Token.EOF) {
    const tokenType = LogicLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
    console.log(`| ${token.text.padEnd(14)} | ${tokenType.padEnd(30)}|`);
    token = lexerForTokens.nextToken();
  }

  console.log("--------------------------------------------------");

  
  const inputStreamForParser = CharStreams.fromString(content);
  const lexerForParser = new LogicLexer(inputStreamForParser);
  const tokenStream = new CommonTokenStream(lexerForParser);
  const parser = new LogicParser(tokenStream);

  const tree = parser.prog();

  if (parser._syntaxErrors > 0) {
    console.error("\nSe encontraron errores de sintaxis en la entrada.");
  } else {
    console.log("\nEntrada válida.");
    const cadena_tree = tree.toStringTree(parser.ruleNames);
    console.log(`Árbol de derivación: ${cadena_tree}`);

    // Visitar el árbol si quieres evaluar algo
    const visitor = new CustomLogicVisitor();
    const result = visitor.visit(tree);
    console.log("Resultado de la evaluación:", result);
  }
}

main();
