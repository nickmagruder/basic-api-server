'use strict';

class FoodInterface {

  constructor(model) {
    this.model = model;
  }

  read(id) {
    if (id) {
      return this.model.find({ _id: id});
    }
    return this.model.find({});
  }

  create(obj) {
    const document = new this.model(obj);
    return document.save();
  }

  update(id, obj) {
    return this.model.findOneAndUpdate({ _id: id}, obj, { new: true });
  }

  delete(id) {
    this.model.findOneAndDelete({ _id: id })
  }
}

module.exports = FoodInterface;



/* constructor() {
  this.id = 0;
  this.db = [];
}

read(id) {
  if (id) {
    return this.db.find(record => record.id === id);
  } else {
    return this.db;
  }
}

create(obj) {

  let record = {
    id: this.id += 1,
    data: obj,
  }

  this.db.push(record);
  return record;
}

update(id, obj) {

  for (let i = 0; i < this.db.length; i++) {
    if (this.db[i].id === id) {
      this.db[i].data = obj;
      return this.db[i];
    }
  }
}

delete(id) {
  for (let i = 0; i < this.db.length; i++) {
    if (this.db[i].id === id) {
      delete this.db[i];
    }
  }
}
} */