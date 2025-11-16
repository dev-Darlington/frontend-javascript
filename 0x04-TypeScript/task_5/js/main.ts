interface MajorCredits {
  credits: number;
  brand: 'MajorCredits';
}

interface MinorCredits {
  credits: number;
  brand: 'MinorCredits';
}

function sumMajorCredits(creditsArray: MajorCredits[]): MajorCredits {
  const totalCredits = creditsArray.reduce((sum, credit) => sum + credit.credits, 0);
  return { credits: totalCredits, brand: 'MajorCredits' };
}

function sumMinorCredits(creditsArray: MinorCredits[]): MinorCredits {
  const totalCredits = creditsArray.reduce((sum, credit) => sum + credit.credits, 0);
  return { credits: totalCredits, brand: 'MinorCredits' };
}