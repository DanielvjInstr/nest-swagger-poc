import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { Options } from 'swagger-jsdoc';
import * as swaggerJSDoc from 'swagger-jsdoc';

const schemas = validationMetadatasToSchemas();

const options: Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Documentation',
      version: '1.0.0',
    },
    components: {
      schemas,
    },
  },
  apis: ['./src/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
