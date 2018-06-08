class BinarySearchTree {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}

	depthFirstForEach(cb) {
		cb(this.value);
		if (this.left) {
			this.left.depthFirstForEach(cb);
		}
		if (this.right) {
			this.right.depthFirstForEach(cb);
		}
	}

	breadthFirstForEach(cb) {
		for (let i = 0; i < this.length; i++) {
			let tree = this[i];
			if (tree.left) this.push(tree.left);
			if (tree.right) this.push(tree.right);
			cb(tree.value);
		}
	}

	insert(value) {
		const newNode = new BinarySearchTree(value);
		if (value < this.value) {
			if (!this.left) {
				this.left = newNode;
			} else {
				this.left.insert(value);
			}
		} else if (value >= this.value) {
			if (!this.right) {
				this.right = newNode;
			} else {
				this.right.insert(value);
			}
		}
	}

	contains(target) {
		if (this.value === target) {
			return true;
		}
		if (this.left) {
			if (this.left.contains(target)) {
				return true;
			}
		}
		if (this.right) {
			if (this.right.contains(target)) {
				return true;
			}
		}
		return false;
	}

	getMax() {
		if (!this) return null;

		let max = this.value;
		let current = this;

		while (current) {
			if (current.value > max) {
				max = current.value;
			}
			current = current.right;
		}

		return max;
	}
}

module.exports = BinarySearchTree;
