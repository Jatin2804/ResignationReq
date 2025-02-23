const mongoose = require('mongoose');

const ResignationSchema = new mongoose.Schema({
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  intendedLastWorkingDay: { type: Date, required: true },
  reason: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Approved', 'Rejected'], default: 'Pending' },
  exitDate: { type: Date },
});

const Resignation = mongoose.model('Resignation', ResignationSchema);
module.exports = Resignation;
