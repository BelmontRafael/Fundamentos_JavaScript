const nameCh = prompt("Insira o nome do personagem");
const power = parseFloat(prompt("Insira o poder de ataque de " + nameCh));
const nameCh2 = prompt("Insira o nome do segundo personagem");
let lifeBar = parseFloat(
  prompt("Insira a quantidade de pontos de vida de " + nameCh2)
);
const defenseBar = parseFloat(prompt("Insira o poder de defesa de " + nameCh2));
const shield = prompt(nameCh2 + " possui escudo?  (Sim/Não)");
let damage = 0;

if (power > defenseBar && shield == "Não") {
  damage = power - defenseBar;
} else if (power > defenseBar && shield == "Sim") {
  damage = (power - defenseBar) / 2;
} else if (power <= defenseBar) {
  damage = 0;
}

lifeBar -= damage;

alert(
  "O " +
    nameCh +
    " causou " +
    damage +
    " ao " +
    nameCh2 +
    "!\n" +
    "Vida atual do " +
    nameCh2 +
    " = " +
    lifeBar
);
