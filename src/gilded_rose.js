function Item (name, sell_in, quality) {
	this.name = name
	this.sell_in = sell_in
	this.quality = quality
}

const items = [
	new Item('+5 Dexterity Vest', 10, 20),
	new Item('Aged Brie', 2, 0),
	new Item('Elixir of the Mongoose', 5, 7),
	new Item('Sulfuras, Hand of Ragnaros', 0, 80),
	new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
	new Item('Conjured Mana Cake', 3, 6),
]

/** @param {Item} item */
function updateItem (item) {
	if (item.name !== 'Sulfuras, Hand of Ragnaros') {
		--item.sell_in
	}

	let itemDegradation = item.sell_in >= 0 ? -1 : -2
	switch (item.name) {
		case 'Sulfuras, Hand of Ragnaros':
			itemDegradation = 0
			break
		case 'Aged Brie':
			itemDegradation = 1
			break
		case 'Backstage passes to a TAFKAL80ETC concert':
			if (item.sell_in < 1) {
				itemDegradation = -item.quality
			} else if (item.sell_in < 5) {
				itemDegradation = 3
			} else if (item.sell_in < 10) {
				itemDegradation = 2
			}
			break
	}

	if (item.name.startsWith('Conjured')) {
		itemDegradation *= 2
	}

	if (itemDegradation) {
		item.quality = Math.max(0, Math.min(item.quality + itemDegradation, 50))
	}
}

function updateItems () {
	items.forEach(updateItem)
}
