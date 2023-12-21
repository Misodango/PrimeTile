Vue.createApp({
	data() {
		return {
			problem: null,
			num: null,
			product: 1,
			facts_size: 5,
			max_ans: 100,
			facts: [],
			weights: Array(20000).fill(0),
			state: false,
			boardSize: 6,
			tiles: [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
			],
			calculated: Array(this.boardSize).fill(1),
		}
	},
	computed: {
		isPrime() {
			for(let i = 0; i < this.boardSize; i++){
				for(let j = 2; j * j <=this.calculated[i]; j++){
					if(this.calculated[i]%j===0) return false;
				}
			}
			return true;
			// if (this.num < 2) return false;
			// for (let i = 2; i * i <= this.num; i++) {
			// 	if (this.num % i === 0) return false;
			// }
			// return true;
		},
		showProduct() {
			let pro = 1;
			for (let i = 0; i < this.facts.length; i++) {
				let tmp = 1;
				//console.log(i, this.weights[this.facts[i]])
				for (let j = 0; j < this.weights[this.facts[i]]; j++) {
					tmp *= this.facts[i];
				}
				//console.log(tmp);
				pro *= tmp;
			}
			this.product = pro;

			this.checkAns();
		},
		isEmpty() {
			return this.facts.length === 0 && this.product === 1;
		},
		calc() {
			this.product = 1;
			for (let i = 0; i < this.boardSize; i++) {
				let tmp = 0;
				for (let j = 0; j < this.boardSize; j++) {
					if (this.tiles[i][j] === 1) {
						tmp += (1 << (this.boardSize - j - 1));
					}
				}
				//console.log("tmp:", tmp);
				this.calculated[i] = tmp;
				if (tmp !== 0) this.product *= tmp;
			}
			//console.log(this.product);

		}

	},
	methods: {
		addFact() {
			if (this.isPrime) {
				if (this.weights[this.num] === 0) {
					this.weights[this.num] = 1;
					this.facts.push(this.num);
				}
				else
					this.weights[this.num]++;
				this.num = null;
			}
		},
		makeProblem() {
			this.clear();
			this.product = 1;
			this.problem = Math.floor(Math.random() * (this.max_ans + 1)) + 1;
			this.clearTile();

		},
		clear() {
			this.num = null;
			// this.product = 1;
			this.facts = [];
			this.weights = Array(20000).fill(0);
		},
		checkAns() {
			// alert(this.calculated);
			// alert(this.product);
			//console.log("product", this.product);
			for (let i = 0; i < this.boardSize; i++) {
				if (!this.TileIsPrime(i)) {
					alert("Wrong! Composit number is Included");
					return false;

				}
			}
			if (this.product === this.problem) {
				alert("Correct!!");
				this.makeProblem();
				return true;
			}
			this.state = false;
			alert("Wrong");
			return false;

		},
		clicked(y, x) {
			//console.log(y, x);
			this.tiles[y][x] ^= 1;
			this.calc;
			// elem = ev.target;
			// //console.log(document.getElementsByTagName("tr"));
		},
		clearTile() {
			this.tiles = [
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 0],
			];
			this.calculated = Array(this.boardSize).fill(1);
			this.product = 1;
		},
		TileIsPrime(row) {
			//console.log(row);
			//console.log(this.calculated[row]);
			for (let i = 2; i * i <= this.calculated[row]; i++) {
				if (this.calculated[row] % i === 0) {
					return false;
				}
			}
			return true;

		},
		divide() {
			//console.log(this.problem, this.product);
			if (this.problem % this.product !== 0) {
				alert("Error");
				return;
			}
			for (let i = 0; i < this.boardSize; i++) {
				if (this.TileIsPrime(this.calculated[i]) === false) return;
			}
			this.problem /= this.product;
			this.clearTile();
			//console.log(this.product);
			if (this.problem === 1) this.checkAns();
		}


	}
}).mount("#app");
