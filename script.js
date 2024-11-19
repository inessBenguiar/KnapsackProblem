document.getElementById("knapsack-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const weights = document.getElementById("weights").value.split(",").map(Number);
    const values = document.getElementById("values").value.split(",").map(Number);
    const capacity = Number(document.getElementById("capacity").value);

    if (weights.length !== values.length) {
        alert("The number of weights and values must be equal.");
        return;
    }

    const { maxGain, selectedItems } = knapsack(weights, values, capacity);

    document.getElementById("max-gain").textContent = `Maximum gain: ${maxGain}`;
    document.getElementById("selected-items").textContent = `Selected objects: ${selectedItems.map(i => `Object ${i + 1}`).join(", ")}`;
    document.getElementById("complexity").textContent = `Time complexity: O(n * W) = O(${weights.length} * ${capacity})`;

    document.getElementById("result").style.display = "block";
});

function knapsack(weights, values, W) {
    const n = weights.length;
    const P = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0));

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j <= W; j++) {
            if (weights[i - 1] > j) {
                P[i][j] = P[i - 1][j];
            } else {
                P[i][j] = Math.max(P[i - 1][j], P[i - 1][j - weights[i - 1]] + values[i - 1]);
            }
        }
    }

    const maxGain = P[n][W];
    const selectedItems = [];
    let w = W;

    for (let i = n; i > 0; i--) {
        if (P[i][w] !== P[i - 1][w]) {
            selectedItems.unshift(i - 1); // Add to position 0 to reverse the order
            w -= weights[i - 1];
        }
    }

    return { maxGain, selectedItems };
}

// Background animation

const state = {
    fps: 30,
    color: "#FF90BC", // Matrix color
    charset: "01",
    size: 25
};

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let w, h, p;
const resize = () => {
    w = canvas.width = innerWidth;
    h = canvas.height = innerHeight;

    p = Array(Math.ceil(w / state.size)).fill(0);
};
window.addEventListener("resize", resize);
resize();

const random = (items) => items[Math.floor(Math.random() * items.length)];

const draw = () => {
    ctx.fillStyle = "rgba(249, 249, 249, 0.05)";
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = state.color;

    ctx.font = state.size + "px monospace";
    for (let i = 0; i < p.length; i++) {
        let v = p[i];
        ctx.fillText(random(state.charset), i * state.size, v);
        p[i] = v >= h || v >= 10000 * Math.random() ? 0 : v + state.size;
    }
};

setInterval(draw, 1000 / state.fps);
