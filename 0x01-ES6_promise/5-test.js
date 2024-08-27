import uploadPhoto from './5-photo-reject';

test("uploadPhoto rejects correctly", () => {
    const successResponse = uploadPhoto('guillaume.jpg');
    return expect(successResponse).rejects.toThrowError(
      new Error('guillaume.jpg cannot be processed')
    );
  });
