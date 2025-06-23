beforeEach(() => {
    document.querySelector('#target').innerHTML = '';
    createAutoComplete({
        root: document.querySelector('#target'),
        fetchData() {
            return [
                { Title: 'Avengers' },
                { Title: 'Lion King' },
                { Title: 'Some other movie' }
            ];
        },
        renderOption(movie) {
          return movie.Title;  
        }
    });
});

it('Dropdown starts closed', () => {

    const dropdown = document.querySelector('.dropdown');

    expect(dropdown.className).not.to.include('is-active');
});

it('After seraching, dropdown opens up', () => {
    // type something in
    // check dropdown
})