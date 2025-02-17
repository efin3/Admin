enum PERMISSIONS {
  /* -------- EscolaLMS/Core -------- */

  CoreDashboardAccess = 'access dashboard', // TODO: unused in api

  /* -------- EscolaLMS/Auth -------- */

  // USER
  UserManage = 'user_manage', // pozwala na cofnięcie `soft delete` lub na `twarde usunięcie` użytkownika

  UserCreate = 'user_create',
  UserRead = 'user_read',
  UserReadSelf = 'user_read_self', // user's own details
  UserReadCourseOwned = 'user_read_course-authored', // reading user details in courses for which you are the author
  UserUpdate = 'user_update',
  UserUpdateSelf = 'user_update_self', // edit own user
  UserDelete = 'user_delete',
  UserDeleteSelf = 'user_delete_self', // remove own user (TODO: hard or soft?)
  UserList = 'user_list',
  UserListCourseOwned = 'user_list_course-authored', // listing users in courses of which you are the author

  // USER GROUP
  UserGroupCreate = 'user-group_create',
  UserGroupRead = 'user-group_read',
  UserGroupReadSelf = 'user-group_read_self', // details of the group you belong to (for tutors)
  UserGroupUpdate = 'user-group_update',
  UserGroupDelete = 'user-group_delete',
  UserGroupMemberAdd = 'user-group_member-add',
  UserGroupMemberRemove = 'user-group_member-remove',
  UserGroupList = 'user-group_list',
  UserGroupListSelf = 'user-group_list_self', // TODO: unused in api

  UserInterestUpdate = 'user-interest_update', // this is used to indicate which courses (or categories?) the user is interested in // TODO: unused in api
  UserInterestUpdateSelf = 'user-interest_update_self', // TODO: unused in api

  // these permissions are for arbitrary metadata assigned to a user
  UserSettingUpdate = 'user-setting_update',
  UserSettingUpdateSelf = 'user-setting_update_self',

  /* -------- EscolaLMS/settings -------- */

  SettingsManage = 'settings_manage', // TODO: unused in api
  SettingsCreate = 'settings_create',
  SettingsRead = 'settings_read',
  SettingsUpdate = 'settings_update',
  SettingsDelete = 'settings_delete',
  SettingsList = 'settings_list',

  // is to edit Laravel settings that are loaded from /config files via the api in the Settings package
  SettingsConfigList = 'settings_config_list',
  SettingsConfigUpdate = 'settings_config_update',

  /* -------- EscolaLMS/Cart -------- */

  ProductsList = 'products_list',
  ProductsManage = 'products_manage',
  ProductsListPurchasable = 'products_list_purchasable',
  ProductsBuy = 'products_buy',

  CartOrderList = 'cart_order_list',
  CartOrderListCourseOwned = 'cart_order_list_course-authored', // order listings for courses of which you are the author (for tutor)

  /* -------- EscolaLMS/Files -------- */

  FileUpload = 'file_create',
  FileMove = 'move:files',
  FileDelete = 'file_delete',
  FileList = 'file_list',

  /* -------- EscolaLMS/Courses -------- */

  CourseList = 'course_list',
  CourseCreate = 'course_create',
  CourseRead = 'course_read',
  CourseUpdate = 'course_update',
  CourseDelete = 'course_delete',
  CourseUpdateAuthored = 'course_update_authored',
  CourseDeleteAuthored = 'course_delete_authored',
  CourseReadAuthored = 'course_read_authored',

  /* -------- EscolaLMS/H5P -------- */

  H5PList = 'h5p_list',
  H5PRead = 'h5p_read',
  H5PCreate = 'h5p_create',
  H5PDelete = 'h5p_delete',
  H5PUpdate = 'h5p-update',

  H5PAuthorList = 'h5p_author_list',
  H5PAuthorUpdate = 'h5p_author_update',

  H5PLibraryList = 'h5p_library_list',
  H5PLibraryRead = 'h5p_library_read',
  H5PLibraryCreate = 'h5p_library_create',
  H5PLibraryDelete = 'h5p_library_delete',
  H5PLibraryUpdate = 'h5p_library_update',
  H5PLibraryInstall = 'h5p_library_install',
  H5PLibraryUpload = 'h5p_library_upload',

  /* -------- EscolaLMS/payments -------- */

  PaymentRead = 'payment_read',
  PaymentList = 'payment_list',

  /* -------- EscolaLMS/Categories -------- */

  CategoryList = 'category_list',
  CategoryRead = 'category_read',
  CategoryCreate = 'category_create',
  CategoryUpdate = 'category_update',
  CategoryDelete = 'category_delete',

  /* -------- EscolaLMS/pages -------- */

  PageList = 'page_list',
  PageRead = 'page_read',
  PageCreate = 'page_create',
  PageUpdate = 'page_update',
  PageDelete = 'page_delete',

  /* -------- EscolaLMS/Scorm -------- */

  ScormList = 'scorm_list',
  ScormRead = 'scorm_read',
  ScormCreate = 'scorm_create',
  ScormUpdate = 'scorm_update',
  ScormDelete = 'scorm_delete',
  ScormGetTrack = 'scorm_track-read',
  ScormSetTrack = 'scorm_track-update',

  /* -------- EscolaLMS/Reports -------- */

  ReportList = 'report_list',

  /* -------- EscolaLMS/Courses-Import-Export -------- */

  CourseExport = 'course-import-export_export',
  CourseImport = 'course-import-export_import',
  CourseExportAuthored = 'course-import-export_export_authored',

  /* -------- EscolaLMS/Permissions -------- */

  PermissionRoleManage = 'permission_role_manage',
  PermisionRoleList = 'permission_role_list',
  PermissionRoleCreate = 'permission_role_create',
  PermissionRoleDelete = 'permission_role_delete',
  PermissionRoleRead = 'permission_role_read',
  PermissionRoleUpdate = 'permission_role_update', // access to edit permissions

  /* -------- EscolaLMS/Templates -------- */

  TemplateList = 'template_list',
  TemplateRead = 'template_read',
  TemplateCreate = 'template_create',
  TemplateDelete = 'template_delete',
  TemplateUpdate = 'template_update',

  /* -------- EscolaLMS/Notifications -------- */

  NotificationListAll = 'dashboard-app_notification-list_access', // ability to read all notifications (including those not belonging to you)
  NotificationList = 'dashboard-app_notification-list_access_self',

  /* -------- EscolaLMS/Questionnaire -------- */

  QuestionnaireList = 'questionnaire_list',
  QuestionnaireRead = 'questionnaire_read',
  QuestionnaireCreate = 'questionnaire_create',
  QuestionnaireDelete = 'questionnaire_delete',
  QuestionnaireUpdate = 'questionnaire_update',

  QuestionList = 'question_list',
  QuestionRead = 'question_read',
  QuestionCreate = 'question_create',
  QuestionDelete = 'question_delete',
  QuestionUpdate = 'question_update',

  /* -------- EscolaLMS/Webinar -------- */

  WebinarList = 'webinar_list',
  WebinarCreate = 'webinar_create',
  WebinarUpdate = 'webinar_update',
  WebinarDelete = 'webinar_delete',
  WebinarRead = 'webinar_read',

  /* -------- EscolaLMS/Consultations -------- */

  ConsultationList = 'consultation_list',
  ConsultationCreate = 'consultation_create',
  ConsultationUpdate = 'consultation_update',
  ConstulatationDelete = 'consultation_delete',
  ConsultationRead = 'consultation_read',

  /* -------- EscolaLMS/Stationary-Events -------- */

  StationaryEventsList = 'stationary-event_list',
  StationaryEventsCreate = 'stationary-event_create',
  StationaryEventsUpdate = 'stationary-event_update',
  StationaryEventsRead = 'stationary-event_read',
  StationaryEventsDelete = 'stationary-event_delete',

  /* -------- EscolaLMS/Tracker -------- */

  TrackerList = 'tracker_route-list',

  /* -------- EscolaLMS/Vouchers -------- */

  VoucherList = 'coupon_list',
  VoucherCreate = 'coupon_create',
  VoucherRead = 'coupon_read',
  VoucherUpdate = 'coupon_update',
  VoucherDelete = 'coupon_delete',
  VoucherUse = 'coupon_use',

  /* -------- EscolaLMS/translations -------- */
  TranslationList = 'translation_list',
  TranslationCreate = 'translation_create',
  TranslationRead = 'translation_read',
  TranslationUpdate = 'translation_update',
  TranslationDelete = 'translation_delete',

  /* -------- EscolaLMS/Tasks -------- */

  TaskCreateOwn = 'task_create-own',
  TaskUpdateOwn = 'task_update-own',
  TaskDeleteOwn = 'task_delete-own',
  TaskListOwn = 'task_list-own',
  TaskFindOwn = 'task_find-own',
  TaskCreate = 'task_create',
  TaskUpdate = 'task_update',
  TaskDelete = 'task_delete',
  TaskList = 'task_list',
  TaskFind = 'task_find',
  TaskNoteCreate = 'task-note_create',
  TaskNoteUpdate = 'task-note_update',
  TaskNoteDelete = 'task-note_delete',

  CourseAccessCreateOwn = 'course-access_create-own',
  CourseAccessDeleteOwn = 'course-access_delete-own',
  CourseAccessListOwn = 'course-access_list-own',
  CourseAccessList = 'course-access_list',
  CourseAccessDelete = 'course-access_delete',
  CourseAccessApprove = 'course-access_approve',

  ConsultationAccessCreateOwn = 'consultation-access_create-own',
  ConsultationAccessListOwn = 'consultation-access_list-own',
  ConsultationAccessList = 'consultation-access_list',
  ConsultationAccessApprove = 'consultation-access_approve',
  ConsultationAccessDisapprove = 'consultation-access_disapprove',
  ConsultationAccessDeleteOwn = 'consultation-access_delete-own',
  ConsultationAccessUpdateOwn = 'consultation-access_update-own',

  /* -------- EscolaLMS/Quiz -------- */
  QuizAttemptCreateOwn = 'quiz-attempt_create-own',
  QuizAttemptListOwn = 'quiz-attempt_list-own',
  QuizAttemptReadOwn = 'quiz-attempt_read-own',
  QuizAttemptList = 'quiz-attempt_list',
  QuizAttemptListSelf = 'quiz-attempt_list-self',
  QuizAttemptRead = 'quiz-attempt_read',
  QuizAttemptUpdate = 'quiz-attempt_update',

  /* -------- EscolaLMS/Teacher -------- */

  /* -------- grades -------- */
  TeacherListGradeTerm = 'grade-term_list',
  TeacherListGradeScale = 'grade-scale_list',
  TeacherListOwnFinalGrade = 'final-grade_list-own',
  TeacherSaveOwnFinalGrade = 'final-grade_save-own',
  TeacherListFinalGrade = 'final-grade_list',
  TeacherSaveFinalGrade = 'final-grade_save',
  TeacherListOwnFinalGrades = 'final-grade_list-own',
  TeacherListExamResult = 'exam_list',
  TeacherListOwnExamResult = 'exam_list-own',
  TeacherListSelfExamResult = 'exam_list-self',
  TeacherSaveExamResult = 'exam_save',
  TeacherSaveOwnExamResult = 'exam_save-own',
  TeacherDeleteExamResult = 'exam_delete',
  TeacherDeleteOwnExamResult = 'exam_delete-own',

  /* -------- attendances -------- */
  TeacherListOwnAttendance = 'attendance_list-own',
  TeacherListAttendance = 'attendance_list-admin',
  TeacherSaveAttendance = 'attendance_save-admin',
  TeacherSaveTutorAttendance = 'attendance_save-own',

  /* -------- EscolaLMS/pcg-integration -------- */
  PCGListAcademicYears = 'pcg-integration_academic-year_list',
  PCGListSemesters = 'pcg-integration_semester_list',
  PCGListSelfSemesters = 'pcg-integration_semester_list-self',
  PCGListSemesterSubjects = 'pcg-integration_semester-subject_list',
  PCGListSelfSemesterSubjects = 'pcg-integration_semester-subject_list-self',
  PCGReadSemesterSubjects = 'pcg-integration_semester-subject_read',
  PCGReadSelfSemesterSubjects = 'pcg-integration_semester-subject_read-self',

  /* -------- EscolaLMS/sds-integration -------- */
  SDSExport = 'sds-integration_export',

  /* -------- EscolaLMS/competency-challenges -------- */
  CompetencyChallengeScaleCreate = 'competency-challenge-scale_create',
  CompetencyChallengeScaleUpdate = 'competency-challenge-scale_update',
  CompetencyChallengeScaleDelete = 'competency-challenge-scale_delete',

  CreateCompetencyChallenges = 'competency-challenges_create',
  ReadCompetencyChallenges = 'competency-challenges_read',
  UpdateCompetencyChallenges = 'competency-challenges_update',
  DeleteCompetencyChallenges = 'competency-challenges_delete',
  ListCompetencyChallenges = 'competency-challenges_list',
}

export default PERMISSIONS;
