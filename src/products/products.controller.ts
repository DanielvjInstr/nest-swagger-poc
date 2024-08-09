import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  /**
   * @swagger
   * /products:
   *   post:
   *     summary: Create a new product
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/CreateProductDto'
   *     responses:
   *       201:
   *         description: The created user
   *       400:
   *         description: Bad request
   */
  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  /**
   * @swagger
   * /products:
   *   get:
   *     summary: Get products
   *     parameters:
   *       - name: limit
   *         in: query
   *         required: false
   *         description: limit of the products to retrieve
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: All of the products
   *       400:
   *         description: Bad request
   */
  @Get()
  findAll() {
    return this.productsService.findAll();
  }

  /**
   * @swagger
   * /products/{id}:
   *   get:
   *     summary: Get product by Id
   *     parameters:
   *       - name: id
   *         in: path
   *         required: true
   *         description: ID of the product to retrieve
   *         schema:
   *           type: string
   *     responses:
   *       200:
   *         description: Product by Id
   *       400:
   *         description: Bad request
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  /**
   * @swagger
   * /products:
   *   patch:
   *     summary: Update a product
   *     parameters:
   *      - name: id
   *        in: path
   *        description: ID of the product to update
   *        required: true
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             $ref: '#/components/schemas/UpdateProductDto'
   *     responses:
   *       201:
   *         description: The created user
   *       400:
   *         description: Bad request
   */
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(+id, updateProductDto);
  }
}
