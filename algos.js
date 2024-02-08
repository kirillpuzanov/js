
	/////// BFS - обход графа в ширину / 
// граф - абстрактная структура данных, имеющая множество "вершин" и набор "ребер", соединяющие пары вершин. 

const graph = {};
graph.a = ['b', 'c'];
graph.b = ['f'];
graph.c = ['d', 'e'];
graph.d = ['f'];
graph.e = ['f'];
graph.f = ['g'];

// Очередь - FIFO

function breadthSearch(graph, start, end) {
	let queue = [];
	queue.push(start);
	while(queue.length > 0) {
		const current = queue.shift();
		if(!graph[current]) {
			graph[current] = [];
		}

		if(graph[current].includes(end)) {
			return true;
		} else {
			queue = [...queue, ...graph[current]]
		}
		console.log('current  -->', current );
		console.log('queue  -->', queue );
		console.log('graph[current]  -->', graph[current] );
	}
	return false;
}
// console.log('-- breadthSearch  -->', breadthSearch(graph, 'a', 'g')); 

// current  --> a
// queue  --> [ 'b', 'c' ]
// graph[current]  --> [ 'b', 'c' ]

// current  --> b
// queue  --> [ 'c', 'f' ]
// graph[current]  --> [ 'f' ]

// current  --> c
// queue  --> [ 'f', 'd', 'e' ]
// graph[current]  --> [ 'd', 'e' ]

// будет current  --> 'f'
// graph[current]  --> [ 'g' ]
// до изменения queue  не дойдет

//////////
////////
/// структуры данных 

// - - - Массив
// Последовательный набор сущностей, объектов. Занимает конкретное кол-во памяти, изначально определяется кол-во элементов =>	мы знаем позицию каждого элемента и можем получить его за константное время.
// Дорогие операции по работе с началом массива - добавлению / удалению, так как нужно переиндексировать все остальные элементы (скорее всего путем создания нового массива под капотом)

// сложность
// поиск по индексу в массиве - константное время О(1)
// перебор всего массива - линейное время О(n)




// - - - Связный список
// Каждый отдельный элемент списка занимает отдельное место в памяти
// Каждый предыдущий элемент хранит ссылку на следующий элемент (а также может хранить ссылку на свой предыдущий элемент одно / дву связный список)
// Могут быть указатели на начало списка и конец 

// сложность
// вставка / удаление / в начало - конец, если знаем место  - константное время О(1)
// вставка в произвольное место, если не знаем место -  линейное время О(n)
// Поиск элемента -  линейное время О(n)

// https://www.youtube.com/watch?v=QdCyTTid9-U&t=1816s&ab_channel=Front-endScience%D1%96%D0%B7%D0%A1%D0%B5%D1%80%D0%B3%D1%96%D1%94%D0%BC%D0%9F%D1%83%D0%B7%D0%B0%D0%BD%D0%BA%D0%BE%D0%B2%D0%B8%D0%BC


class LinkedListNode {
	constructor(value, next = null) {
		this.value = value;
		this.next = next;
	}

	toString() {
		return `${this.value}`
	}
}

class LinkedList {
	constructor() {
		this.head = null;
		this.tail = null;
		this.size = 0;
	}

	append(value) {
			const newNode = new LinkedListNode(value);
			this.size += 1;

			if(!this.head || !this.tail) {
				this.head = newNode;
				this.tail = newNode;
				return this;
			}

			this.tail.next = newNode;
			this.tail = newNode;
			return this;
	}

	getSize() {
		return this.size;
	}

	toArray() {
		const nodes = [];
		let currentNode = this.head;

		while(currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		}
		return nodes;
	}

	toString() {
		return this.toArray().map((node)=> node.toString())
	}
}

const list = new LinkedList();
list.append('a').append('b').append('c');

// console.log('-- getSize  -->', list.getSize());
list.append('a').append('b').append('c');

// console.log('-- getSize  -->', list.getSize());
// console.log('-- toString  -->', list.toString());

