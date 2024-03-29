import { Produits } from './produits';

describe('Produits', () => {
  it('devrait créer un produit avec des valeurs valides', () => {
    const produit = new Produits('Papier A4', 'Lisse', 80, 5.99, 'Blanc');
    expect(produit).toBeTruthy();
    expect(produit.id).toBeDefined();
    expect(produit.nom).toBe('Papier A4');
    expect(produit.texture).toBe('Lisse');
    expect(produit.grammage).toBe(80);
    expect(produit.prix).toBe(5.99);
    expect(produit.couleur).toBe('Blanc');
  });

  // Tests pour vérifier les validations des propriétés
  it('devrait échouer si le nom est manquant ou trop long', () => {
    expect(() => new Produits('', 'Lisse', 80, 5.99, 'Blanc')).toThrowError(/nom est obligatoire/);
    expect(() => new Produits('Papier avec un nom très très très long qui dépasse la limite de 100 caractères', 'Lisse', 80, 5.99, 'Blanc')).toThrowError(/nom est obligatoire/);
  });

  it('devrait échouer si la texture est manquante ou trop longue', () => {
    expect(() => new Produits('Papier A4', '', 80, 5.99, 'Blanc')).toThrowError(/texture est obligatoire/);
    expect(() => new Produits('Papier A4', 'Texture qui dépasse la limite de 50 caractères autorisés pour la texture', 80, 5.99, 'Blanc')).toThrowError(/texture est obligatoire/);
  });

  it('devrait échouer si le grammage est en dehors de la plage valide', () => {
    expect(() => new Produits('Papier A4', 'Lisse', 5, 5.99, 'Blanc')).toThrowError(/grammage doit être un nombre entre 10 et 1000/);
    expect(() => new Produits('Papier A4', 'Lisse', 1500, 5.99, 'Blanc')).toThrowError(/grammage doit être un nombre entre 10 et 1000/);
  });

  it('devrait échouer si le prix est en dehors de la plage valide', () => {
    expect(() => new Produits('Papier A4', 'Lisse', 80, -5.99, 'Blanc')).toThrowError(/prix doit être un nombre entre 0 et 1000/);
    expect(() => new Produits('Papier A4', 'Lisse', 80, 1500, 'Blanc')).toThrowError(/prix doit être un nombre entre 0 et 1000/);
  });

  it('devrait échouer si la couleur facultative est invalide', () => {
    expect(() => new Produits('Papier A4', 'Lisse', 80, 5.99, 'TrèsLongueCouleurQuiDépasseLaLimite')).toThrowError(/couleur facultative doit avoir entre 3 et 25 caractères/);
  });
});
