const express = require('express');

const { auth: ctrl } = require('../../controllers');

const { ctrlWrapper } = require('../../helpers');

const { validateBody, authenticate, upload } = require('../../middlewares');

const { schemas } = require('../../models/users');

const router = express.Router();

router.post(
  '/users/register',
  validateBody(schemas.userRegisterSchema),
  ctrlWrapper(ctrl.register)
);

router.post(
  '/users/login',
  validateBody(schemas.userLoginSchema),
  ctrlWrapper(ctrl.login)
);

router.get('/users/current', authenticate, ctrlWrapper(ctrl.getCurrent));
router.get('/users/logout', authenticate, ctrlWrapper(ctrl.logout));

router.patch(
  '/users',
  authenticate,
  validateBody(schemas.updateSubscriptionSchema),
  ctrlWrapper(ctrl.upDateSubscription)
);

router.patch(
  '/users/avatars',
  authenticate,
  upload.single('avatar'),
  ctrlWrapper(ctrl.upDateAvatar)
);

module.exports = router;
