export async function loader({
    params,
  }) {
    return fake.db.getConcerts({
      date: params.date,
      city: params.city,
    });
  }
  