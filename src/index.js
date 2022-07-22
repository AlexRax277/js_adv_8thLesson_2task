class ErrorRepository {
  constructor() {
    this.map = new Map();
    this.map.set(1, 'Timeout Error').set(2, 'Connection Error').set(3, 'Incorrect Data');
  }

  translate(code) {
    if (this.map.has(code)) {
      return this.map.get(code);
    } return 'Unknown error';
  }
}

export default ErrorRepository;
