import { SearchfilterPipe } from './searchfilter.pipe';

describe('SearchfilterPipe', () => {
  let search:SearchfilterPipe

  beforeEach(() => {
    search = new SearchfilterPipe();
});
  it('create an instance', () => {
    expect(search).toBeTruthy();
  });

  it('should return empty array if no items given', () => {

    let items = null;

    let filtered = search.transform(items, 'name', 'Hans');

    expect(filtered.length).toBe(0);
    expect(filtered).toEqual([]);
});
it('should return items if no value is given', () => {

  let items = [];
  items.push({ id: 1, name: 'Hans',last: 'r' });

  let filtered = search.transform(items, 'name', null);

  expect(filtered).toEqual(items);
});
it('should filter correctly', () => {

  let items = [];

  items.push({ id: 1, name: 'Hans' });
  items.push({ id: 2, name: 'Franz' });
  items.push({ id: 3, name: 'Kurt' });
  items.push({ id: 4, name: 'Gustav' });

  let filtered = search.transform(items, 'name', 'Hans');

  expect(filtered.length).toBeGreaterThan(0);
  expect(filtered.length).toBe(1);
});

it('should filter two items', () => {

  let items = [];

  items.push({ id: 1, name: 'Hans' });
  items.push({ id: 2, name: 'Hans' });
  items.push({ id: 3, name: 'Kurt' });
  items.push({ id: 4, name: 'Gustav' });

  let filtered = search.transform(items, 'name', 'Hans');

  expect(filtered.length).toBe(2);
});

it('search items by matching the term for key value pair', () => {
  let items = [];
  items.push({LoanNumber: 1 ,Borrower_FirstName: 'Sagar',Borrower_LastName: 'Rajani'});
  items.push({LoanNumber: 2 ,Borrower_FirstName: 'John',Borrower_LastName: 'Miller'});
  items.push({LoanNumber: 3 ,Borrower_FirstName: 'sagarika',Borrower_LastName: 'Corbin'});

  expect(search.transform(items, 'LoanNumber,Borrower_FirstName', 'sag')).toEqual([{LoanNumber: 1,'Borrower_FirstName': 'Sagar', 'Borrower_LastName': 'Rajani'},{'LoanNumber': 3, 'Borrower_FirstName': 'sagarika','Borrower_LastName': 'Corbin'}])
});
});


