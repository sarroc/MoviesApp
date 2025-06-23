it('Shows an autocomplete!', () => {
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