// Here you write the tests for the Example class we created
import { Example } from '../src/Example';

test('Do I sum??', () => {
	const e: Example = new Example();

	expect(e.sum(1, 2) == 3);
});
