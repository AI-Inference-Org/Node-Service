import express from 'express';
import auth from '../../middlewares/auth';
import validate from '../../middlewares/validate';
import { deploymentValidation, userValidation } from '../../validations';
import { userController } from '../../controllers';
import deploymentController from '../../controllers/deployment.controller';

const router = express.Router();

router
  .route('/')
  .post(auth('createDeployment'), validate(deploymentValidation.createDeployment), deploymentController.createDeployment)
  .get(auth('getDeployments'), validate(deploymentValidation.getDeployments), deploymentController.getDeployments);

router
  .route('/:deploymentId')
  .get(auth('getDeployment'), validate(deploymentValidation.getDeployment), deploymentController.getDeployment)
export default router;

/**
 * @swagger
 * tags:
 *   name: Deployment
 *   description: Deployment creation
 */

/**
 * @swagger
 * /deployment:
 *   post:
 *     summary: Create a Deployment
 *     description: Only Sellers can create Deployment.
 *     tags: [Deployment]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - category
 *               - status
 *               - description
 *               - url
 *               - price
 *               - type
 *             properties:
 *               name:
 *                 type: string
 *               category:
 *                 type: string
 *               status:
 *                 type: string
 *               description:
 *                 type: string
 *               url:
 *                 type: string
 *               price:
 *                 type: number
 *               type:
 *                  type: string
 *                  enum: [APPLICATION, BINARY, PLUGIN]
 *             example:
 *               name: Rat GPT
 *               category: Object Detection
 *               status: Production
 *               description: a rat based model
 *               url: https://path-to-model
 *               price: 50
 *               type: application
 *     responses:
 *       "201":
 *         description: Created
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *   get:
 *     summary: Get all Deployments
 *     description: all can call this.
 *     tags: [Deployment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: deployment name
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: category
 *       - in: query
 *         name: type
 *         schema:
 *           type: string
 *         description: deployment type
 *       - in: query
 *         name: userId
 *         schema:
 *           type: number
 *         description: get user deployments
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of users
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *           default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/User'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /deployment/{id}:
 *   get:
 *     summary: Get a user
 *     description: Logged in users can fetch only their own user information. Only admins can fetch other users.
 *     tags: [Deployment]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/User'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 */
