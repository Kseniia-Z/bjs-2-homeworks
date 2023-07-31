class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.find(item => item == time)) {
			console.warn('Уже присутствует звонок на это же время');
		}
		return this.alarmCollection.push({
			callback,
			time,
			canCall: true
		});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(item => item.time != time);
	}

	getCurrentFormattedTime() {
		let date = new Date();
		let hours = date.getHours();
		let minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
		return `${hours}:${minutes}`;
	}

	start() {
		if (this.intervalId) {
			return;
		}
		this.intervalId = setInterval(() => {
			this.alarmCollection.forEach(item => {
				if (this.getCurrentFormattedTime() == item.time && item.canCall) {
					item.canCall = false;
					item.callback();
				}
			})
		}, 1000)
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(item => item.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}