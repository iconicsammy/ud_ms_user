export const config = {
  'username': 'semira',
  'password': 'semira503',
  'database': 'postgres',
  'host': 'udmsdb.crew3keyvyxp.us-east-2.rds.amazonaws.com',
  'dialect': 'postgres',
  'aws_region': 'us-east-2',
  'aws_profile': 'default',
  'aws_media_bucket': 'bucket',
  'url': process.env.URL,
  'jwt': {
    'secret': process.env.JWT_SECRET,
  },
};
