describe('Gilded Rose', function () {
	describe('When `sell_in` is below 0', () => {
		it('Should degrade `quality` by -2', () => {
			const item = new Item('', -2, 20)
			updateItem(item)
			expect(item.quality).toBe(20 - 2)
		})
	})

	describe('When `sell_in` is at 0', () => {
		it('Should degrade `quality` by -2', () => {
			const item = new Item('', 0, 20)
			updateItem(item)
			expect(item.quality).toBe(20 - 2)
		})
	})

	describe('When `sell_in` is above 0', () => {
		it('Should degrade `quality` by -1', () => {
			const item = new Item('', 1, 20)
			updateItem(item)
			expect(item.quality).toBe(20 - 1)
		})
	})

	describe('When `quality` is above 0', () => {
		it('Should degrade by -1', () => {
			const item = new Item('', 1, 1)
			updateItem(item)
			expect(item.quality).toBe(0)
		})
	})

	describe('When `quality` is 0', () => {
		it('Should not degrade', () => {
			const item = new Item('', 1, 0)
			updateItem(item)
			expect(item.quality).toBe(0)
		})
	})

	describe('When item is "Aged Brie"', () => {
		describe('And `quality` is below 50', () => {
			it('Should increase by 1', () => {
				const item = new Item('Aged Brie', 1, 49)
				updateItem(item)
				expect(item.quality).toBe(50)
			})
		})

		describe('And `quality` is at 50', () => {
			it('Should not increase', () => {
				const item = new Item('Aged Brie', 1, 50)
				updateItem(item)
				expect(item.quality).toBe(50)
			})
		})
	})

	describe('When item is "Sulfuras, Hand of Ragnaros"', () => {
		const item = new Item('Sulfuras, Hand of Ragnaros', 10, 20)
		updateItem(item)

		it('Should not change `quality`', () => {
			expect(item.quality).toBe(20)
		})

		it('Should not change `sell_in`', () => {
			expect(item.sell_in).toBe(10)
		})
	})

	describe('When item is "Backstage passes to a TAFKAL80ETC concert"', () => {
		describe('And `sell_in` is at 10', () => {
			it('Should increase `quality` by 2', () => {
				const item = new Item('Backstage passes to a TAFKAL80ETC concert', 10, 20)
				updateItem(item)
				expect(item.quality).toBe(22)
			})
		})

		describe('And `sell_in` is below 10', () => {
			it('Should increase `quality` by 2', () => {
				const item = new Item('Backstage passes to a TAFKAL80ETC concert', 9, 20)
				updateItem(item)
				expect(item.quality).toBe(22)
			})
		})

		describe('And `sell_in` is at 5', () => {
			it('Should increase `quality` by 3', () => {
				const item = new Item('Backstage passes to a TAFKAL80ETC concert', 5, 20)
				updateItem(item)
				expect(item.quality).toBe(23)
			})
		})

		describe('And `sell_in` is below 5', () => {
			it('Should increase `quality` by 3', () => {
				const item = new Item('Backstage passes to a TAFKAL80ETC concert', 4, 20)
				updateItem(item)
				expect(item.quality).toBe(23)
			})
		})

		describe('And `sell_in` is 0', () => {
			it('Should set `quality` to 0', () => {
				const item = new Item('Backstage passes to a TAFKAL80ETC concert', 0, 20)
				updateItem(item)
				expect(item.quality).toBe(0)
			})
		})
	})

	describe('When item is Conjured', () => {
		describe('And `sell_in` is below 0', () => {
			it('Should degrade `quality` by -4', () => {
				const item = new Item('Conjured Whatever', -2, 20)
				updateItem(item)
				expect(item.quality).toBe(20 - 4)
			})
		})

		describe('And `sell_in` is at 0', () => {
			it('Should degrade `quality` by -4', () => {
				const item = new Item('Conjured Stick', 0, 20)
				updateItem(item)
				expect(item.quality).toBe(20 - 4)
			})
		})

		describe('And `sell_in` is above 0', () => {
			it('Should degrade `quality` by -2', () => {
				const item = new Item('Conjured Rock', 1, 20)
				updateItem(item)
				expect(item.quality).toBe(20 - 2)
			})
		})
	})
})
