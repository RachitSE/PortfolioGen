export const generateIntro = async (fullName, bio) => {
    try {
      const res = await fetch('/api/generateIntro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ fullName, bio }),
      });
  
      const data = await res.json();
      return data.intro || 'Something went wrong.';
    } catch (err) {
      console.error('Error generating intro:', err);
      return 'Failed to generate intro.';
    }
  };    