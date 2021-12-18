/// <reference types="cypress" />

describe('Mengisi Data Profil Dengan Sesuai (Benar)', () => {
    it('Visit LMS JTI POLINEMA', () => {
        // Mengarahkan cypress ke link yang dituju
        cy.visit('http://lms.jti.polinema.ac.id/login/index.php')
            // Mengarahkan ke id username dengan mengisi nim milik saya
        cy.get('#username')
            .type('1941720062')
            // Mengarahkan ke id password dengan mengisi password benar
        cy.get('#password')
            .type('1941720062')
            // Melakukan klik button dengan memberi fungsi click
        cy.get('#loginbtn').click()
            // Mengambil id dropdown dengan menambah fungsi click
        cy.get('#dropdown-1').click()
            // Melakukan id dropown yang kedua karena yang pertama paada div class id berubah
        cy.get('#dropdown-1').click()
            // Menambahkan id dengan target yaitu action menu agar dapat diarahkan
        cy.get('#actionmenuaction-5').click()
            // Melakukan visit pada link berikut karena tipe id yang digunakan berupa link
        cy.visit('http://lms.jti.polinema.ac.id/user/edit.php?id=2218&amp;course=1')
            // Melakukan clear isi tabel yang telah ada sebelumya
        cy.get('#id_firstname')
            .clear().should('be.empty')
            // Menambahkan isi dari kolom yang telah dihapus sebelumnya (firstname)
        cy.get('#id_firstname')
            .type('1332123212').should('not.have.text', "/^[^1-9]*$/")
            // Melakukan clear isi tabel yang telah ada sebelumya (lastname)
        cy.get('#id_lastname')
            .clear().should('be.empty')
            // Menambahkan isi dari kolom yang telah dihapus sebelumnya (lastname)
        cy.get('#id_lastname')
            .type('Ikhlasul').should('not.have.value', /^[^1-9]*$/)
            // Melakukan clear isi tabel yang telah ada sebelumya (kota)
        cy.get('#id_country')
            .select('Indonesia').should('have.value', 'ID')
        cy.get('#id_city')
            .clear().should('be.empty')
            // Menambahkan isi dari kolom yang telah dihapus sebelumnya (kota)
        cy.get('#id_city')
            .type('6767283').invoke('text')
            .should('match', /^[^a-z]*$/)
            // Menekan submit button
        cy.get('#id_submitbutton').should('have.value', 'Update profile')
            // Menekan submit button
        cy.get('#id_submitbutton').click()
    })
})