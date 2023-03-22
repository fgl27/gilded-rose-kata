function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

const items = [];

function update_quality() {
  for (const item of items) {
    //"Sulfuras", being a legendary item, never has to be sold or decreases in quality
    //and its quality is 80 and it never alters.
    if (item.name === 'Sulfuras, Hand of Ragnaros') {
      continue;
    }

    item.sell_in--;

    if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      //"Backstage passes", like "Aged brie", increases in quality as its sell-in value approaches
      set_quality_backstage(item);
    } else if (item.name === 'Aged Brie') {
      //"Aged brie", increases in quality as its sell-in value approaches
      set_quality_with_offset(item, 1);
    } else if (item.name === 'Conjured Mana Cake') {
      //"Conjured" items degrade in quality twice as fast as normal items
      set_quality_with_offset(item, -2);
    } else {
      //"Normal" items degrade in quality
      set_quality_with_offset(item, -1);
    }

    //The quality of an item is never more than 50 or negative, unless it's "Sulfuras" which case the code will not reach this line
    item.quality = Math.max(0, Math.min(50, item.quality));
  }
}

function set_quality_backstage(item) {
  let qualityOffset = 1;

  if (item.sell_in < 0) {
    //"Backstage passes" quality drops to 0 after the concert
    qualityOffset = -item.quality;
  } else if (item.sell_in < 5) {
    //Quality increases by 3 when there are 5 days or less
    qualityOffset = 3;
  } else if (item.sell_in < 10) {
    //"Backstage passes" quality increases by 2 when there are 10 days or less
    qualityOffset = 2;
  }

  item.quality += qualityOffset;
}

function set_quality_with_offset(item, qualityOffset) {
  if (item.sell_in < 0) {
    //Once the sell by date has passed, quality increases/degrades twice as fast
    qualityOffset *= 2;
  }

  item.quality += qualityOffset;
}
