/*
 * Copyright (C) 2022 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

const iconLabels = {
  'أيقونة الفنون': 'art',
  'أيقونة الهندسة': 'engineering',
  'أيقونة الإنجليزية': 'english',
  'أيقونة الأنشطة غير الصفية': 'extracurricular',
  'أيقونة الصحة': 'health',
  'أيقونة آداب اللغة': 'languageArts',
  'أيقونة اللغات': 'languages',
  'أيقونة المكتبة': 'library',
  'أيقونة الرياضيات': 'math',
  'أيقونة الموسيقى': 'music',
  'أيقونة الفنون التعبيرية': 'performingArts',
  'أيقونة التربية البدنية': 'physicalEducation',
  'أيقونة الدين': 'religion',
  'Eicon Celf': 'art',
  'Eicon Peirianeg': 'engineering',
  'Eicon Saesneg': 'english',
  'Eicon Allgwricwlar': 'extracurricular',
  'Eicon Iechyd': 'health',
  'Eicon Celfyddydau Iaith': 'languageArts',
  'Eicon Ieithoedd': 'languages',
  'Eicon Llyfrgell': 'library',
  'Eicon Mathemateg': 'math',
  'Eicon Cerddoriaeth': 'music',
  'Eicon Celfyddydau Perfformio': 'performingArts',
  'Eicon Addysg Gorfforol': 'physicalEducation',
  'Eicon Crefydd': 'religion',
  "Icona d''art": 'art',
  'Icona d’enginyeria': 'engineering',
  'Icona d’anglès': 'english',
  'Icona extracurricular': 'extracurricular',
  'Icona de salut': 'health',
  "Icona d''arts lingüístiques": 'languageArts',
  'Icona d’idiomes': 'languages',
  'Icona de biblioteca': 'library',
  'Icona de matemàtiques': 'math',
  'Icona de música': 'music',
  "Icona d''arts interpretatives": 'performingArts',
  'Icona d’educació física': 'physicalEducation',
  'Icona de religió': 'religion',
  'Kunst-ikon': 'art',
  'Teknik-ikon': 'engineering',
  'Engelsk-ikon': 'english',
  'Fritids-ikon': 'extracurricular',
  'Sundheds-ikon': 'health',
  'Sprogkunst-ikon': 'languageArts',
  'Sprog-ikon': 'languages',
  'Bibliotek-ikon': 'library',
  'Matematik-ikon': 'math',
  'Musik-ikon': 'music',
  'Scenekunst-ikon': 'performingArts',
  'Idræt-ikon': 'physicalEducation',
  'Religion-ikon': 'religion',
  Kunstsymbol: 'art',
  'Engineering-Symbol': 'engineering',
  'Englisch-Symbol': 'english',
  'Außerschulisches Symbol': 'extracurricular',
  Gesundheitssymbol: 'health',
  'Symbol für „Sprachkunst“': 'languageArts',
  'Sprachen-Symbol': 'languages',
  Bibliothekssymbol: 'library',
  'Symbol „Mathematik“': 'math',
  Musiksymbol: 'music',
  'Symbol für „Darstellende Kunst“': 'performingArts',
  'Symbol Für Körperertüchtigung': 'physicalEducation',
  Religionssymbol: 'religion',
  'Art Icon': 'art',
  'Engineering Icon': 'engineering',
  'English Icon': 'english',
  'Extracurricular Icon': 'extracurricular',
  'Health Icon': 'health',
  'Language Arts Icon': 'languageArts',
  'Languages Icon': 'languages',
  'Library Icon': 'library',
  'Math Icon': 'math',
  'Music Icon': 'music',
  'Performing Arts Icon': 'performingArts',
  'Physical Education Icon': 'physicalEducation',
  'Religion Icon': 'religion',
  'Ícono de arte': 'art',
  'Ícono de ingeniería': 'engineering',
  'Ícono de ingles': 'english',
  'Ícono extracurricular': 'extracurricular',
  'Ícono de salud': 'health',
  'Ícono de artes del lenguaje': 'languageArts',
  'Ícono de idiomas': 'languages',
  'Ícono de biblioteca': 'library',
  'Ícono de matemáticas': 'math',
  'Ícono de música': 'music',
  'Ícono de artes escénicas': 'performingArts',
  'Ícono de educación física': 'physicalEducation',
  'Ícono de religión': 'religion',
  'Icono plástica': 'art',
  'Icono tecnología': 'engineering',
  'Icono inglés': 'english',
  'Icono extracurricular': 'extracurricular',
  'Icono ciencias': 'health',
  'Icono plástica e idiomas': 'languageArts',
  'Icono idiomas': 'languages',
  'Icono biblioteca': 'library',
  'Icono matemáticas': 'math',
  'Icono música': 'music',
  // Repeated label for different icons
  // 'Icono plástica': 'performingArts',
  'Icono educación física': 'physicalEducation',
  'Icono religión': 'religion',
  'Taide-kuvake': 'art',
  'Suunnittelu-kuvake': 'engineering',
  'Englanninkielen kuvake': 'english',
  'Kouluajan ulkopuolisen kohteen kuvake': 'extracurricular',
  'Terveys-kuvake': 'health',
  'Kielen taiteiden kuvake': 'languageArts',
  'Kielien kuvake': 'languages',
  'Kirjaston kuvake': 'library',
  'Matematiikan kuvake': 'math',
  'Musiikki-kuvake': 'music',
  'Esittävien taiteiden kuvake': 'performingArts',
  'Liikuntakasvatuksen kuvake': 'physicalEducation',
  'Uskonnon kuvake': 'religion',
  'Icône d’art': 'art',
  'Icône Ingénierie': 'engineering',
  'Icône Anglais': 'english',
  'Icône Parascolaire': 'extracurricular',
  'Icône Santé': 'health',
  'Icône Arts de la langue': 'languageArts',
  'Icône Langues': 'languages',
  'Icône Bibliothèque': 'library',
  'Icône Mathématique': 'math',
  'Icône Musique': 'music',
  'Icône Arts de la scène': 'performingArts',
  'Icône Éducation physique': 'physicalEducation',
  'Icône Religion': 'religion',
  'Icône art': 'art',
  'Icône ingénierie': 'engineering',
  'Icône anglais': 'english',
  'Icône extrascolaire': 'extracurricular',
  'Icône santé': 'health',
  'Icône langues': 'languages',
  'Icône bibliothèque': 'library',
  'Icône maths': 'math',
  'Icône musique': 'music',
  'Icône arts du spectacle': 'performingArts',
  'Icône éducation physique': 'physicalEducation',
  'Icône religion': 'religion',
  'Ikòn la': 'art',
  'Ikòn Jeni': 'engineering',
  'Ikòn Anglè': 'english',
  'Ikòn Paraskolè': 'extracurricular',
  'Ikòn Sante': 'health',
  'Ikòn Langaj Da': 'languageArts',
  'Ikòn Langaj': 'languages',
  'Ikòn Bibliyotèk': 'library',
  'Ikòn Matematik': 'math',
  'Ikòn Mizik': 'music',
  'Ikòn Pèfòmans Da': 'performingArts',
  'Ikòn Edikasyon Fizik': 'physicalEducation',
  'Ikòn Relijyon': 'religion',
  'Lista tákn': 'art',
  'Verkfræði tákn': 'engineering',
  'Ensku tákn': 'english',
  'Utanskóla tákn': 'extracurricular',
  'Heilsu tákn': 'health',
  'Tungumálalistar tákn': 'languageArts',
  'Tungumála tákn': 'languages',
  'Bóksafns tákn': 'library',
  'Stærðfræði tákn': 'math',
  'Tónlistar tákn': 'music',
  'Sviðslista tákn': 'performingArts',
  'Íþrótta tákn': 'physicalEducation',
  'Trúar tákn': 'religion',
  'Icona art': 'art',
  'Icona Progettazione': 'engineering',
  'Icona Inglese': 'english',
  'Icona Extracurricolare': 'extracurricular',
  'Icona Salute': 'health',
  'Icona Studio della lingua': 'languageArts',
  'Icona Lingue': 'languages',
  'Icona Libreria': 'library',
  'Icona Matematica': 'math',
  'Icona Musica': 'music',
  'Icona Arti dello spettacolo': 'performingArts',
  'Icona Educazione fisica': 'physicalEducation',
  'Icona Religione': 'religion',
  Kunstikon: 'art',
  'Ingeniør-ikon': 'engineering',
  'Utenomfaglig-ikon': 'extracurricular',
  'Helse-ikon': 'health',
  'Språkkunst-ikon': 'languageArts',
  'Språk-ikon': 'languages',
  'Matte-ikon': 'math',
  'Musikk-ikon': 'music',
  'Gymnastikk-ikon': 'physicalEducation',
  アートのアイコン: 'art',
  エンジニアリングのアイコン: 'engineering',
  英語のアイコン: 'english',
  課外活動のアイコン: 'extracurricular',
  健康のアイコン: 'health',
  語学のアイコン: 'languageArts',
  言語のアイコン: 'languages',
  ライブラリーのアイコン: 'library',
  数学のアイコン: 'math',
  音楽のアイコン: 'music',
  パフォーミングアーツのアイコン: 'performingArts',
  体育のアイコン: 'physicalEducation',
  宗教学のアイコン: 'religion',
  Kunstpictogram: 'art',
  'Engineering-pictogram': 'engineering',
  'Engels-pictogram': 'english',
  'Extracurriculair-pictogram': 'extracurricular',
  Gezondheidpictogram: 'health',
  Linguïstiekpictogram: 'languageArts',
  Talenpictogram: 'languages',
  Bibliotheekpictogram: 'library',
  Wiskundepictogram: 'math',
  Muziekpictogram: 'music',
  'Pictogram voor uitvoerende kunsten': 'performingArts',
  'Pictogram voor lichamelijke opvoeding': 'physicalEducation',
  Religiepictogram: 'religion',
  'Ikona sztuki': 'art',
  'Ikona inżynierii': 'engineering',
  'Ikona angielskiego': 'english',
  'Ikona zajęć pozalekcyjnych': 'extracurricular',
  'Ikona zdrowia': 'health',
  'Ikona języków obcych': 'languageArts',
  'Ikona języków': 'languages',
  'Ikona biblioteki': 'library',
  'Ikona matematyki': 'math',
  'Ikona muzyki': 'music',
  'Ikona sztuk wizualnych': 'performingArts',
  'Ikona wychowania fizycznego': 'physicalEducation',
  'Ikona religii': 'religion',
  'Toi Tohu': 'art',
  'Hangarau Tohu': 'engineering',
  'Ingarihi Tohu': 'english',
  'Extracurricular Tohu': 'extracurricular',
  'Hauora Tohu': 'health',
  'Reo Toi Tohu': 'languageArts',
  'Nga reo Tohu': 'languages',
  'Whare Pukapuka Tohu': 'library',
  'Math Tohu': 'math',
  'Puoro Tohu': 'music',
  'Performing Arts Tohu': 'performingArts',
  'Tinana Mātauranga Tohu': 'physicalEducation',
  'Whakapono Tohu': 'religion',

  'Ícone da Arte': 'art',
  'Ícone de engenharia': 'engineering',
  'Ícone inglês': 'english',
  'Ícone extracurricular': 'extracurricular',
  'Ícone de saúde': 'health',
  'Ícone das Artes Linguísticas': 'languageArts',
  'Ícone de Idiomas': 'languages',
  'Ícone da biblioteca': 'library',
  'Ícone Matemática': 'math',
  'Ícone de música': 'music',
  'Ícone das Artes Performativas': 'performingArts',
  'Ícone de Educação Física': 'physicalEducation',
  'Ícone Religião': 'religion',
  'Ícone de arte': 'art',
  'Ícone de inglês': 'english',
  'Ícone de artes linguísticas': 'languageArts',
  'Ícone de idiomas': 'languages',
  'Ícone de matemática': 'math',
  'Ícone de artes cênicas': 'performingArts',
  'Ícone de educação física': 'physicalEducation',
  'Ícone de religião': 'religion',
  'Значок искусства': 'art',
  'Значок техники': 'engineering',
  'Английский значок': 'english',
  'Значок факультативных дисциплин': 'extracurricular',
  'Значок здоровья': 'health',
  'Значок языковых дисциплин': 'languageArts',
  'Значок языков': 'languages',
  'Значок библиотеки': 'library',
  'Значок математики': 'math',
  'Значок музыки': 'music',
  'Значок исполнительских видов искусства': 'performingArts',
  'Значок физкультуры': 'physicalEducation',
  'Значок религии': 'religion',
  Konstikon: 'art',
  Ingenjörsikon: 'engineering',
  'Engelsk ikon': 'english',
  Fritidsikon: 'extracurricular',
  Hälsoikon: 'health',
  Språkvetenskapsikon: 'languageArts',
  Språkikon: 'languages',
  Biblioteksikon: 'library',
  Matteikon: 'math',
  Musikikon: 'music',
  Underhållningsikon: 'performingArts',
  'Ikon för idrott och hälsa': 'physicalEducation',
  'Religiös ikon': 'religion',
  'Ikona umetnosti': 'art',
  'Ikona inženirstva': 'engineering',
  'Angleška ikona': 'english',
  'Zunajštudijska ikona': 'extracurricular',
  'Ikona zdravstva': 'health',
  'Ikona za jezikovni predmet': 'languageArts',
  'Ikona za jezike': 'languages',
  'Ikona knjižnice': 'library',
  'Ikona matematike': 'math',
  'Ikona glasbe': 'music',
  'Ikona odrskih umetnosti': 'performingArts',
  'Ikona športne vzgoje': 'physicalEducation',
  'Ikona religije': 'religion',
  'Biểu Tượng Nghệ Thuật': 'art',
  'Biểu Tượng Kỹ Thuật': 'engineering',
  'Biểu Tượng Tiếng Anh': 'english',
  'Biểu Tượng Ngoại Khóa': 'extracurricular',
  'Biểu Tượng Sức Khỏe': 'health',
  'Biểu Tượng Nghệ Thuật Ngôn Ngữ': 'languageArts',
  'Biểu Tượng Ngôn Ngữ': 'languages',
  'Biểu Tượng Thư Viện': 'library',
  'Biểu Tượng Toán': 'math',
  'Biểu Tượng Âm Nhạc': 'music',
  'Biểu Tượng Nghệ Thuật Biểu Diễn': 'performingArts',
  'Biểu Tượng Giáo Dục Thể Chất': 'physicalEducation',
  'Biểu Tượng Tôn Giáo': 'religion',
  艺术图标: 'art',
  工程设计图标: 'engineering',
  英语图标: 'english',
  课外图标: 'extracurricular',
  健康图标: 'health',
  语言艺术图标: 'languageArts',
  语言图标: 'languages',
  图书馆图标: 'library',
  数学图标: 'math',
  音乐图标: 'music',
  表演艺术图标: 'performingArts',
  体育图标: 'physicalEducation',
  宗教图标: 'religion',
  藝術圖示: 'art',
  工程圖示: 'engineering',
  英文圖示: 'english',
  課外活動圖示: 'extracurricular',
  健康圖示: 'health',
  語言文學圖示: 'languageArts',
  語言圖示: 'languages',
  圖書館圖示: 'library',
  數學圖示: 'math',
  音樂圖示: 'music',
  表演藝術圖示: 'performingArts',
  體育圖示: 'physicalEducation',
  宗教圖示: 'religion',
  ไอคอนอาร์ตเวิร์ค: 'art',
  ไอคอนวิศวกรรม: 'engineering',
  ไอคอนอังกฤษ: 'english',
  ไอคอนกิจกรรมนอกหลักสูตร: 'extracurricular',
  ไอคอนสุขภาพ: 'health',
  ไอคอนศิลปศาสตร์ด้านภาษา: 'languageArts',
  ไอคอนภาษา: 'languages',
  ไอคอนห้องสมุด: 'library',
  ไอคอนคณิตศาสตร์: 'math',
  ไอคอนดนตรี: 'music',
  ไอคอนนาฏศิลป์: 'performingArts',
  ไอคอนพลศึกษา: 'physicalEducation',
  ไอคอนศาสนา: 'religion'
}

export default iconLabels
