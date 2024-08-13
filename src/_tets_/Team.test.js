import Team from '../Team'

class Character {}

describe('Team', () => {
    let team;
    let character1;
    let character2;

    beforeEach(() => {
        team = new Team();
        character1 = new Character();
        character2 = new Character();
    });

    test('should add a character', () => {
        team.add(character1);
        expect(team.toArray()).toContain(character1);
    });

    test('should throw error when adding the same character twice', () => {
        team.add(character1);
        expect(() => team.add(character1)).toThrow('Character already exists in the team');
    });

    test('should add multiple characters', () => {
        team.addAll(character1, character2);
        expect(team.toArray()).toContain(character1);
        expect(team.toArray()).toContain(character2);
    });

    test('should not throw error when adding duplicate characters using addAll', () => {
        team.addAll(character1, character2);
        team.addAll(character1);
        expect(team.toArray().length).toBe(2);
    });

    test('should convert to array correctly', () => {
        team.add(character1);
        expect(team.toArray()).toEqual([character1]);
    });
});
