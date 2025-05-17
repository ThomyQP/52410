 import LogicVisitor from "./generated/LogicVisitor.js";
 export class CustomLogicVisitor extends LogicVisitor {


    constructor() {
      super();
      this.variables = {};  // Acumulador de asignaciones
      this.lastValue = null;
    }

    visitProg(ctx) {
      for (const line of ctx.line()) {
        this.lastValue = this.visit(line);
      }
      return this.lastValue; // Solo la última fórmula
    }

    visitLine(ctx) {
      if (ctx.assignment()) return this.visit(ctx.assignment());
      if (ctx.formula()) return this.visit(ctx.formula());
    }

    visitAssignment(ctx) {
    const varName = ctx.variable().getText();
    let value;

    if (ctx.TRUE()) {
      value = true;
    } else if (ctx.FALSE()) {
      value = false;
    } else {
      throw new Error("Asignación inválida");
    }

    this.variables[varName] = value;
    return null;
  }

   visitImplication(ctx) {
  const left = this.visit(ctx.disjunction(0));
  if (ctx.IMPLIES()) {
    const right = this.visit(ctx.implication());
    return (!left || right);
  }
  return left;
}


    visitDisjunction(ctx) {
      let result = this.visit(ctx.conjunction(0));
      for (let i = 1; i < ctx.conjunction().length; i++) {
        result = result || this.visit(ctx.conjunction(i));
      }
      return result;
    }

    visitConjunction(ctx) {
      let result = this.visit(ctx.negation(0));
      for (let i = 1; i < ctx.negation().length; i++) {
        result = result && this.visit(ctx.negation(i));
      }
      return result;
    }

    visitNegation(ctx) {
      if (ctx.NOT()) {
        return !this.visit(ctx.negation());
      } else {
        return this.visit(ctx.primary());
      }
    }

    visitPrimary(ctx) {
      if (ctx.variable()) {
        return this.visit(ctx.variable());
      } else if (ctx.TRUE()) {
        return true;
      } else if (ctx.FALSE()) {
        return false;
      } else if (ctx.LPAREN()) {
        return this.visit(ctx.formula());
      }
    }

    visitVariable(ctx) {
      const varName = ctx.getText();
      if (this.variables.hasOwnProperty(varName)) {
        return this.variables[varName];
      } else {
        throw new Error(`Variable no asignada: ${varName}`);
      }
    }
  }
