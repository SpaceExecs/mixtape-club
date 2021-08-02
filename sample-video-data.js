// CREATE TABLE`playlist`(
//     `id` INTEGER NOT NULL AUTO_INCREMENT,
//     `userId` INTEGER NOT NULL DEFAULT,
//     `aSideLinks` CHAR(1000) NOT NULL DEFAULT ' ',
//     `bSideLinks` CHAR(10000) NULL DEFAULT NULL,
//     `aTitles` CHAR(1000) NOT NULL,
//     `bTitles` CHAR(255) NOT NULL DEFAULT ' ',
//     PRIMARY KEY(`id`)
// );

const playlist = {
  id: 1,
  userId: 1,
  aSideLinks: ['4D2qcbu26gs', 'r52KqG4G678', 'Rht7rBHuXW8'],
  bSideLinks: ['8ahU-x-4Gxw', 'H1Zm6E6Sy4Y', 'fpsOOrwF558'],
  aTitles: ['The Stone Roses - I Wanna Be Adored (Official Video)', 'Doja Cat - Juicy (Audio)', 'ROSALÍA - "Malamente" (Official Video) Download & stream “Malamente”'],
  bTitles: ['New Order - Age Of Consent', 'Boy Harsher — Pain', 'Total Control - Flesh War'],
};

export default playlist;
