describe('Gilded Rose', function () {
  describe('Test setup', () => {
    it('Setupt', function () {
      items.push(new Item('+5 Dexterity Vest', 10, 20)); //0
      items.push(new Item('Aged Brie', 2, 0)); //1
      items.push(new Item('Elixir of the Mongoose', 5, 7)); //2
      items.push(new Item('Sulfuras, Hand of Ragnaros', 0, 80)); //3
      items.push(new Item('Sulfuras, Hand of Ragnaros', -1, 80)); //4
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20)); //5
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49)); //6
      items.push(new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49)); //7
      items.push(new Item('Conjured Mana Cake', 3, 6)); //8
      items.push(new Item('Conjured Mana Cake', 3, 7)); //9

      expect(items.length).toEqual(10);
    });
  });

  describe('Conjured Mana Cake', () => {
    it('Conjured Mana Cake test', function () {
      const days = 2;

      for (let i = 0; i < days; i++) {
        update_quality();
      }

      expect(items[8].quality).toEqual(2);
      expect(items[9].quality).toEqual(3);
      update_quality();
      expect(items[8].quality).toEqual(0);
      expect(items[9].quality).toEqual(1);
      update_quality();
      expect(items[9].quality).toEqual(0);
    });
  });

  describe('Elixir of the Mongoose', () => {
    it('Elixir of the Mongoose test', function () {
      expect(items[2].quality).toEqual(3);
    });
  });

  describe('Aged Brie', () => {
    it('Aged Brie test', function () {
      expect(items[1].quality).toEqual(6);
    });
  });

  describe('Backstage', () => {
    it('Aged Brie test', function () {
      let days = 2;

      for (let i = 0; i < days; i++) {
        update_quality();
      }

      expect(items[5].quality).toEqual(27);
      expect(items[6].quality).toEqual(50);
      expect(items[7].quality).toEqual(0);
      update_quality();
      expect(items[5].quality).toEqual(29);

      days = 4;

      for (let i = 0; i < days; i++) {
        update_quality();
      }
      expect(items[5].quality).toEqual(38);
    });
  });

  describe('Sulfuras', () => {
    it('Sulfuras test', function () {
      expect(items[3].quality).toEqual(80);
      expect(items[4].quality).toEqual(80);
    });
  });

  describe('+5 Dexterity Vest', () => {
    it('+5 Dexterity Vest test', function () {
      expect(items[0].quality).toEqual(8);
    });
  });
});
