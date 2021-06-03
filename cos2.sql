DROP TABLE IF EXISTS `sql_derech_haketzev`.`costumes_in_locations`;
DROP TABLE IF EXISTS `sql_derech_haketzev`.`costume_movements`;
DROP TABLE IF EXISTS `sql_derech_haketzev`.`costume_transportations`;
DROP TABLE IF EXISTS `sql_derech_haketzev`.`costume_items`;
DROP TABLE IF EXISTS `sql_derech_haketzev`.`costumes`;
CREATE TABLE `costumes` (
  `cos_id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `cos_name` varchar(50) NOT NULL,
  `cos_type` tinyint UNSIGNED NOT NULL,
  `cos_notes` tinytext,
  PRIMARY KEY (`cos_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `costumes`
VALUES
  (1,'גלביה מנומרת',4,null),
  (2,'I♥LA',2,null),
  (3,'דגמ"ח',1,null),
  (4,'מעיל גשם',7,null),
  (5,'טוטו',6,null);

CREATE TABLE `costume_items` (
  `cit_costume_id` tinyint UNSIGNED NOT NULL,
  `cit_item_id` tinyint UNSIGNED NOT NULL,
  `cit_sizes` set('2','4-6','8','8-10','10','12','12-14','14','16','16-18','18','y','xxs','xs','s','s-m','m','l','l-xl','xl','xxl','one size'),
  `cit_colors` set('לבן','שחור','אפור','אפור בהיר','בורדו','אדום','כתום','צהוב','צהוב זוהר','ירוק זוהר','ירוק בהיר','ירוק כהה','כחול','תכלת','ורוד','ורוד זוהר','סגול בהיר','סגול','מנומר','זהב','גוף'),
  `cit_gender` enum('בנים','בנות','כולם'),
  `cit_at_location` tinyint UNSIGNED,
  `cit_at_drummer` smallint UNSIGNED,
  `cit_notes` tinytext,
  PRIMARY KEY (`cit_costume_id`, `cit_item_id`),
  KEY `cit_item_id` (`cit_item_id`),
  FOREIGN KEY (`cit_costume_id`) REFERENCES `costumes` (`cos_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (`cit_at_location`) REFERENCES `locations` (`loc_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (`cit_at_drummer`) REFERENCES `drummers` (`dru_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `costume_items`
VALUES
  (2,1,'s','לבן,אדום','בנות',1,null,null),
  (2,2,'s','לבן,אדום','בנות',1,null,null),
  (2,3,'s','לבן,אדום','בנות',1,null,null),
  (2,4,'m','לבן,אדום','בנות',1,null,null),
  (2,5,'m','לבן,אדום','בנות',1,null,null);

CREATE TABLE `costume_transportations` (
  `ctr_transportation_id` tinyint UNSIGNED NOT NULL AUTO_INCREMENT,
  `ctr_costume_id` tinyint UNSIGNED NOT NULL,
  `ctr_item_id` tinyint UNSIGNED NOT NULL,
  `ctr_date` date NOT NULL,
  `ctr_type` set('חלוקה להופעה','החזרה למחסן','השאלה','העברת מחסן','שונות') NOT NULL,
  `ctr_location_origin` tinyint UNSIGNED,
  `ctr_drummer_origin` smallint UNSIGNED,
  `ctr_location_destination` tinyint UNSIGNED,
  `ctr_drummer_destination` smallint UNSIGNED,
  `ctr_notes` tinytext,
  PRIMARY KEY (`ctr_transportation_id`),
  FOREIGN KEY (`ctr_costume_id`) REFERENCES `costumes` (`cos_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (`ctr_item_id`) REFERENCES `costume_items` (`cit_item_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (`ctr_location_origin`) REFERENCES `locations` (`loc_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (`ctr_drummer_origin`) REFERENCES `drummers` (`dru_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (`ctr_location_destination`) REFERENCES `locations` (`loc_id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  FOREIGN KEY (`ctr_drummer_destination`) REFERENCES `drummers` (`dru_id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
INSERT INTO `costume_transportations`
VALUES
  (1,2,1,'2019-06-30','חלוקה להופעה',1,null,null,3,'מי הפרובינציאל, מופע סוף שנה'),
  (2,2,1,'2019-07-03','החזרה למחסן',null,3,1,null,null),
  (3,2,5,'2021-02-24','השאלה',1,null,null,3,'תחפושת פורים'),
  (4,2,1,'2019-02-24','החזרה למחסן',null,3,1,null,null);
