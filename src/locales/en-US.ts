import component from './en-US/component';
import globalHeader from './en-US/globalHeader';
import menu from './en-US/menu';
import pwa from './en-US/pwa';
import settingDrawer from './en-US/settingDrawer';
import settings from './en-US/settings';
import pages from './en-US/pages';
import notifications from './en-US/notifications';
import templates from './en-US/templates';
import consultations from './en-US/consultations';
import fabric from './en-US/fabric';
import vouchers from './en-US/vouchers';
import courses from './en-US/courses';
import events from './en-US/events';

export default {
  actions: 'Actions',
  question: 'Question',
  sort: 'Sort',
  newQuestion: 'New Question',
  'Questions.delete': 'delete',
  'Questions.edit': 'edit',
  'menu.Payments': 'Payments',
  multiple_choice: 'Multiple Choice',
  'menu.Vouchers': 'Vouchers',
  'menu.Orders': 'Orders',
  'menu.Products': 'Products',
  'Uploaded Projects': 'Uploaded Projects',
  'menu.Other activities.Consultation Requests': 'Consultation Requests',
  'menu.Courses.Access Requests': 'Access Requests',
  multiple_choice_with_multiple_right_answers: 'Multiple Choice with multiple right answers',
  true_false: 'True False',
  short_answers: 'Short Answers',
  matching: 'Matching',
  numerical_question: 'Numerical',
  essay: 'Essay',
  description: 'Description',
  translationJsonText: 'Translation Object',
  translationJsonText_tooltip: 'Translation Object_tooltip',
  editTranslation: 'Edit Translation',
  parent: 'Parent',
  parent_lesson: 'Parent Lesson',
  courseAccessEnquiries: 'Course Access Enquiries',
  'menu.Other activities.Tasks': 'Tasks',
  'menu.Configuration.Panel Translations': 'Panel Translations',
  lang: 'Language',
  file_resources: 'File resources',
  select_user_role: 'Select role',
  select_user_group: 'Select user group',
  select_semester: 'Select semester',
  select_attempt: 'Select attempt',
  attempt: 'Attempt',
  groups: 'Groups',
  groupId: 'Group ID: ',
  students: 'Students',
  exams: 'Exams (partial grades)',
  schedule: 'Schedule',
  attendance: 'Attendance',
  'grades-scale': 'Grades scale',
  'final-grades': 'Final grades',
  'file-exports-history': 'Data exports history',
  'class-register': 'Class register',
  subject: 'Subject',
  subjects: 'Subjects',
  groupName: 'Group name',
  studentsList: 'Students list',
  nameAndSurname: 'Name and surname',
  attendances: 'Attendances',
  noAttendanceSchedule: 'No attendance schedule for this group...',
  msTeams: 'MS Teams',
  uploadAttendance: 'Upload attendance',
  uploadGrades: 'Uploading grades type',
  semester: 'Semester',
  tutorName: 'Tutor',
  examTitle: 'Enter an exam title',
  examResult: 'Exam result',
  examResults: 'Exam results',
  datePassingExam: 'Date of passing the exam',
  examImportance: 'Exam importance (1-100%)',
  gradesType: 'Type of grades to upload',
  uploadGradesManually: 'Enter exam grades manually',
  'uploadFile.MsTeams': 'Upload file from MS Teams Lecture',
  'uploadFile.MsTeamsForms': 'Upload XLSX file from MS Teams Form',
  'uploadFile.TestPortal': 'Upload XLSX file from TestPortal',
  'navBar.lang': 'Languages',
  'layout.user.link.help': 'Help',
  'layout.user.link.privacy': 'Privacy',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
  ...pages,
  ...notifications,
  ...templates,
  ...consultations,
  ...fabric,
  ...vouchers,
  ...courses,
  ...events,
  branding: 'Branding',
  product_details: 'Product details',
  title: 'Title',
  options: 'Options',
  base_price: 'Base price [¢]',
  base_price_tooltip: 'Base price [¢]. Use 0 for free course',
  duration_freemode_description:
    'By default this value is treated as number of hours - To pass value in minutes use this format: "n minutes"',
  duration_freemode: 'Duration (hours)',
  duration: 'Duration',
  duration_tooltip: 'Duration, example "1 hour"',
  categories: 'Categories',
  tags: 'Tags',
  H5Ps: 'H5Ps',
  new: 'new',
  library: 'Library',
  access: 'Access',
  answers: 'Answers',
  'menu.Courses': 'Courses',
  'menu.Courses.List': 'List',
  'menu.Courses.Form': 'Form',
  'menu.Sales': 'Sales',
  'menu.Teacher': 'Teacher',
  'menu.Teacher.Subjects': 'Subjects',
  'menu.Users': 'Users',
  'menu.Users.List': 'List',
  'menu.Users.User': 'User',
  'menu.Users.User Form': 'Users',
  'menu.Welcome': 'Welcome',
  'menu.Courses.Course Form': 'Course Form',
  'menu.Users.Form': 'Form',
  'menu.Courses.H5Ps': 'H5Ps',
  'menu.Courses.Categories': 'Categories',
  'menu.Configuration': 'Configuration',
  'menu.Configuration.Files': 'Files',
  'menu.Configuration.Translations': 'Translations',
  'menu.Other activities.Pages': 'Pages',
  'menu.Sales.Payments': 'Payments',
  'menu.Sales.Orders': 'Orders',
  'menu.Sales.Products': 'Products',
  'menu.Courses.SCORMs': 'SCORMs',
  'menu.Configuration.settings': 'Settings',
  'menu.Analytics.reports': 'Reports',
  'menu.Courses.Webinars': 'Webinars',
  'menu.Courses.Quiz Reports': 'Quiz Reports',
  'menu.Courses.Details': 'Details',
  'menu.Users.User Groups': 'User Groups',
  'menu.Other activities.Questionnaire': 'Questionnaires',
  'menu.Other activities.Questionnaire Form': 'Questionnaire Form',
  'menu.Other activities': 'Other activities',
  'menu.Other activities.Consultations': 'Consultations',
  'menu.Other activities.StationaryEvents': 'Stationary events',
  'menu.Analytics.Logs': 'Logs',
  'menu.Sales.Vouchers': 'Vouchers',
  'stationary_event.edit': 'Stationary event edit form',
  stationary_event: 'Stationary event',
  finished_at: 'Finished at Date',
  finished_at_tooltip: 'Finished at Date',
  started_at: 'Started at Date',
  started_at_tooltip: 'Started at Date',
  end_at: 'End at Date',
  max_participants: 'Max number of participants',
  max_participants_tooltip: 'Max number of participants',
  StationaryEvents: 'Stationary events',
  'menu.reset': 'reset',
  'menu.settings': 'Settings',
  'menu.Settings': 'Settings',
  settings: 'settings',
  package: 'package',
  id: 'id',
  place: 'Place',
  place_tooltip: 'Place',
  user_groups: 'User Groups',
  new_user_group: 'New User Group',
  edit_user_group: 'Edit User Group',
  add_person_to_group: 'Add person to group',
  user_settings: 'User settings',
  global_settings: 'Global settings',
  'user.settings': 'User settings',
  'user.settings.overwrite': 'Overwrite all',
  Active: 'Active',
  address: 'Address',
  Inactive: 'Inactive',
  active: 'Active',
  inactive: 'Inactive',
  draft: 'Draft',
  published: 'Published',
  archived: 'Archived',
  slug: 'Slug',
  name: 'Name',
  ID: 'ID',
  newCategory: 'Create new Category',
  editCategory: 'Edit Category',
  parent_category: 'Parent category',
  is_active: 'Active?',
  parent_id: 'Parent category',
  parent_id_tooltip: 'The parent category to which the new category will be assigned',
  parent_id_group: 'Parent group',
  parent_id_group_tooltip:
    'The search result will return all categories that are linked to the parent category',
  registerable: 'Registerable',
  edit: 'Edit',
  delete: 'Delete',
  deleteQuestion: 'Are you sure to delete this record?',
  payments: 'Payments',
  order: 'Order',
  orders: 'Orders',
  amount: 'Amount',
  status: 'Status',
  users: 'Users',
  user: 'User',
  first_name: 'First Name',
  last_name: 'Last Name',
  email: 'Email',
  email_tooltip: 'Email',
  email_resend: 'Email resent',
  event: 'Event',
  general: 'General',
  password: 'Password',
  current_password: 'Actual password',
  new_password: 'New password',
  new_confirm_password: 'Confirm new password',
  notifications: 'Notifications',
  change_password: 'Change password',
  search: 'Search',
  search_tooltip_1: 'Will search through first name, last name and email',
  search_tooltip_user_groups: 'Will search through name',
  roles: 'Roles',
  rodo: 'Privacy policy',
  regulations: 'Terms of service',
  permissions: 'Permissions',
  verified: 'Verified',
  not_verified: 'Unverified',
  is_email_verified: 'Email verified?',
  email_verified: 'Email verified',
  dateRange: 'Date range',
  created_at: 'Created at',
  create_new: 'Create new',
  updated_at: 'Updated at',
  unsaved_changes: 'Changes you made may not be saved.',
  currency: 'Currency',
  subtotal: 'Subtotal',
  tax: 'Tax',
  total: 'Total',
  items: 'Items',
  author: 'Author',
  course: 'Course',
  select: 'Please select',
  select_tags: 'Select tags',
  to: 'to',
  select_person: 'Select a person',
  select_course: 'Select a course',
  select_groups: 'Select a groups',
  select_group: 'Select a group',
  select_all: 'Select all',
  deselect_all: 'Deselect all',
  select_templates: 'Select a templates',
  select_type_topic: 'Select type of topic to continue',
  select_scorm_package: 'Select SCORM package',
  select_certificate_package: 'Select certificate template',
  billable: 'Billable to',
  payable: 'Payable to',
  newH5P: 'New file H5P',
  H5P_scorm_preview: 'H5P. Scorm content preview',
  H5P_uploaded: 'New file H5P uploaded successfully',
  H5P_preview_title: 'H5P. HTML Content preview',
  H5P_new_content_title: 'H5p. New',
  H5P_edit_content_title: 'H5p. Edit',

  H5P_select_content: 'Select content for H5P',
  upload_click_here: 'Click here to add file',
  upload: 'Add file',
  preview: 'Preview',
  export: 'Export',
  able_to_preview: 'Able to preview',
  loading_content: 'Loading content...',
  preview_content: 'Preview content',
  version: 'Version',
  SCOS: 'Sharable Content Objects',
  assign: 'Assign',
  newScorm: 'New SCORM',
  scorm_uploaded: 'New SCORM uploaded',
  yes: 'Yes',
  no: 'No',
  cantDelete: "You can't delete this category because it's parent to others",
  group: 'Group',
  key: 'Key',
  type: 'Type',
  enumerable: 'Enumerable',
  note: 'Note',
  public: 'Public',
  value: 'Value',
  editSetting: 'Edit',
  newSetting: 'Create',
  success: 'Success',
  error: 'Error',
  loading: 'Loading',
  subtitle: 'Subtitle',
  hour: 'Hour',
  language: 'Language',
  level: 'Level',
  active_from: 'Active from',
  active_to: 'Active to',
  hours_to_complete: 'Hours to complete',
  purchasable: 'Purchasable',
  findable: 'Findable',
  target_group: 'Target group',
  author_tutor: 'Author / Tutor',
  summary: 'Summary',
  summary_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  short_description: 'Short description',
  description_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  attributes: 'Attributes',
  new_course: 'New course',
  new_questionnaire: 'New Questionnaire',
  questionnaires: 'Questionnaires',
  questionnaire: 'Questionnaire',
  'questionnaire.submit': 'Submit',
  'questionnaire.raports.filter': 'Filter by assigned models',
  questions: 'Questions',
  question_list: 'Questions list',
  question_add: 'Add question',
  question_edit: 'Edit question',
  media: 'Media',
  image: 'Image',
  poster: 'Poster',
  video: 'Video',
  audio: 'Audio',
  categories_tags: 'Categories & Tags',
  program: 'Program',
  program_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown',
  position: 'Position',
  scorm: 'SCORM',
  add_new_lesson: 'Add new lesson',
  lesson: 'Lesson',
  topic: 'Topic',
  topics: 'Topics',
  topic_list: 'Topic List',
  topic_types: 'Topic types',
  tutor: 'Tutor',
  tutors: 'Tutors',
  add_new_topic: 'Add new topic',
  no_topics: 'There are no topics yet on this lesson',
  no_data: 'No data',
  create: 'Create',
  save: 'Save',
  relase_drop: 'Release to drop',
  drag_here: 'Drag a box here',
  sort_element_up: 'Sort this element up',
  sort_element_down: 'Sort this element down',
  copy_lesson: 'Copy Lesson',
  copy_topic: 'Copy Topic',
  'h5p.description.header': 'H5P Info',
  'h5p.description.first': 'To assign Interactive HTML5 element to lesson topic you need to ',
  'h5p.description.second': 'create it first',
  'h5p.description.third': ' or use one ',
  'h5p.description.fourth': 'from the list',
  'h5p.description.fifth': " if it's already created. Press",
  'h5p.description.sixth':
    'button to see how does content looks like and see list of `XAPI` events.',
  my_profile: 'My profile',
  logout: 'Logout',
  bio: 'Bio',
  bio_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  avatar: 'avatar',
  avatar_placeholder: 'Add avatar to see preview',
  wysiwyg_placeholder:
    "Type here text to see the rich text editor features. Start with '/' to open formatting options or click on '+' button",
  edit_user: 'Edit user',
  new_user: 'New user',
  send: 'Send',
  resend: 'Resend',
  back: 'Back',
  back_home: 'Back to main page',
  '403_subtitle': 'Sorry, you are not authorized to access this page.',
  '404_subtitle': 'Sorry, the page you visited does not exist.',
  user_id: 'User ID: ',
  order_id: 'Order ID: ',
  course_id: 'Course ID: ',
  consultation_id: 'Consultation ID: ',
  webinar_id: 'Webinar ID: ',
  stationary_event_id: 'Stationary event ID: ',
  gift_quiz_id: 'GIFT Quiz ID: ',
  count_h5p: 'H5P count',
  library_id: 'Library ID',
  new_payment: 'new',
  paid: 'paid',
  cancelled: 'cancelled',
  cancel: 'Cancel',
  failed: 'failed',
  clear_selection: 'clear selection',
  form: 'Form',
  none: 'None',
  too_many_chars: 'Too many characters',
  CoursesMoneySpentMetric: 'Courses money spent metric',
  CoursesPopularityMetric: 'Courses popularity metric',
  CoursesSecondsSpentMetric: 'Courses seconds spent metric',
  TutorsPopularityMetric: 'Tutors popularity metric',
  AverageTimePerTopic: 'Average time per topic',
  MoneyEarned: 'Money earned',
  CertificateTemplates: 'Certificate templates',
  AverageTime: 'Total time',
  People: 'People',
  PeopleBought: 'People who bought this course',
  PeopleFinished: 'People who completed this course',
  PeopleStarted: 'People who started this course',
  reuse_existing: 'Reuse existing',
  open_new_content_editor: 'Open new content editor',
  content: 'Content',
  contact: 'Contact',
  country: 'Country',
  slug_tooltip: 'SLUG is part of Pages URL ',
  sum_rate: 'Ranking',
  show_hide_on_front: 'Show/Hide on front',
  visible: 'Visible',
  hidden: 'Hidden',
  question_answer_visibility_changed: 'Answer visibility changed',
  count_answers: 'Answers count',
  content_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  pages: 'Pages',
  page: 'Page',
  import_users: 'Import users',
  import_file: 'Import file',
  new_page: 'New static page',
  edit_page: 'Edit static page',
  example_json: 'JSON Example',
  can_skip: 'Can be omitted',
  statistics: 'Statistics',
  certificates: 'Certificates',
  query: 'Query',
  reset: 'Reset',
  reset_password: 'Reset password',
  search_file: 'Search file',
  open_editor: 'Open editor',
  json: 'JSON Metadata',
  additional: 'Additional',
  json_tooltip: 'Additional metadata for rendering course',
  introduction: 'Introduction',
  introduction_tooltip:
    'The editor is WYSIWYG and includes formatting tools whilst retaining the ability to write markdown shortcuts inline and output plain Markdown.',
  Push: 'Push',
  templates: 'Templates',
  SMS: 'SMS',
  PDF: 'PDF',
  'menu.Analytics': 'Analytics',
  'menu.Analytics.Notifications': 'Notifications',
  'menu.Users.Roles': 'Roles',
  'menu.Configuration.Templates': 'Templates',
  'menu.Users.Permissions': 'Permissions',
  new_template: 'New Template',
  template: 'Template',
  contentHtml: 'HTML Content',
  contentMjml: 'Mjml Content',
  html_tooltip: 'HTML content',
  product: 'Product',
  'product.edit': 'Edit Product',
  'menu.Other activities.Products': 'Products',
  'menu.Other activities.Form': 'Form',
  H5P: 'H5P',
  'webinar.edit': 'Webinar Edit',
  role: 'Role',
  'course.validate_edit.header':
    'This course is already underway! Are you sure you want to edit it?',
  'course.validate_edit.content':
    'You should not edit this course as it is already in progress. Clicking ok will allow you to edit, but you do so at your own risk.',
  Course: 'Course',
  Consultation: 'Consultation',
  limit_total: 'Limit total',
  limit_total_tooltip: 'Maximum number of products that can be purchased',
  limit_per_user: 'Limit per user',
  limit_per_user_tooltip:
    'Purchase limit per person. For example, a value of 1 will allow the user to purchase one product',
  extra_fees: 'Extra fees {currency}',
  extra_fees_tooltip: 'Additional fees that will be charged when purchasing the product',
  price_old: 'Price old {currency}',
  price_old_tooltip: 'Old price which will be displayed as crossed out next to the current price',
  tax_value: 'Tax value {currency}',
  tax_value_tooltip: 'Tax value, calculated automatically',
  price_brutto: 'Price brutto {currency}',
  price_brutto_tooltip: 'Price brutto of the product, calculated automatically',
  tax_rate: 'Tax rate',
  tax_rate_tooltip: 'Tax rate specified as a percentage',
  price: 'Price {currency}',
  price_in_cents: 'Price (in cents)',
  price_tooltip: 'Product price',
  teaser_url: 'Teaser URL',
  teaser_url_tooltip: 'URL to teaser',
  select_product: 'Select product',
  productables: 'Object assign to product',
  productables_tooltip: 'Object assign to product',
  bundle: 'Bundle',
  single: 'Single',
  StationaryEvent: 'Stationary event',
  default: 'Default Value',
  text: 'text',
  varchar: 'varchar',
  number: 'number',
  boolean: 'boolean',
  editModelField: 'Edit Model Field',
  ModelFields: 'Model Fields',
  list: 'List',
  newModelField: 'New Model Field',
  notPowerOfTwo: 'This is not a power 2',
  rules: 'Rules',
  visibility: 'Visibility',
  name_tooltip: 'Name',
  type_tooltip:
    'Specify the field type: single choose field, numeric field, varchar field, text field or JSON format',
  rules_tooltip: 'a json list of string rules used on create/update model',
  extra: 'Additional values',
  extra_tooltip:
    'Additional JSON values. For example if you want to create field translations, you need to enter values in the editor: [{"pl": "Polskie tłumaczenie"},{"en": "English translation"}]',
  default_tooltip:
    'The default value for the selected field, which will be displayed if the value has not yet been saved in the database',
  visibility_tooltip:
    'Field visibility for API. Value 1 - publicly visible, 2 - visible to logged in users, 4 - visible to the administrator.',
  'available-validation-rules': 'available validation methods',
  'available-validation-rules-tooltip':
    'Validation of the selected field. For example if you want a field to be required, you must provide a value in the JSON editor: ["required"]',
  Products: 'Products',
  free: 'free',
  free_capi: 'Free',
  prices: 'Prices',
  additional_fields: 'Additional Fields',
  user_to_add: 'Attach user to product',
  user_submission: 'Users Attached without Account',
  email_to_add: 'Add user by email address',
  Webinar: 'Webinar',
  productable: 'Entity',
  all: 'All',
  categories_and_tags: 'Categories & Tags',
  course_edit_warning_message:
    'This record is already in progress, if you wish to edit click confirm. You edit at your own risk',
  user_logs: 'User logs',
  http_method: 'HTTP method',
  path: 'Path',
  generated_pdfs: 'Generated PDFs',
  download_all: 'Download all',
  download_pdf: 'Download PDF',
  select_content: 'Select content',
  exclude_promotions: 'Can it be combined with other promotions',
  generate: 'Generate',
  generate_pdf: 'Generate PDF(s)',
  generate_pdf_tooltip: 'Generate PDF(s)',
  generate_pdf_users_tooltip:
    'Click this button to generate PDF for this template for all user from the list',
  generate_pdf_products_tooltip:
    'Click this button to generate PDF for this template for all user that purchased selected Product',
  generate_pdf_for_products_tooltip:
    'Click this button to generate PDF for selected template for all users that purchased this Product',
  select_template: 'Wybierz szablon',
  product_categories_and_tags: 'Product Categories & Tags',
  cart_media: 'Cart Media',
  agenda: 'Agenda',
  users_attached: 'Users Attached',
  generate_token: 'Generate youtube token',
  browse: 'Browse files',
  related_products: 'Related Products',
  selected_products: 'Selected objects',
  quantity: 'Quantity',
  gt_last_login_day: '>= Login last n days',
  lt_last_login_day: '<= Login last n days',
  json_editor: 'Open JSON editor',
  created_before: 'Created before',
  created_after: 'Created after',
  redirect: 'redirect',
  logotype: 'Logotype',
  published_unactivated: 'Opublikowany nieaktywny',
  active_from_extra: 'Select a sales activation date',
  active_to_extra: 'Select a sales deactivation date',
  duration_extra: 'Specify duration in minutes',
  course_success_modal_title: 'Congratulations!',
  course_success_modal_content:
    'You have created a course. Now you can create lessons for your course.',
  course_success_modal_button_ok: 'Create modules',
  course_success_modal_button_cancel: 'Go to course page',
  program_form_empty_list_message:
    'You have no content to view yet. Create your first lesson to get started.',
  program_form_not_selected_list_message: 'Select a lesson or topic to edit.',
  clone: 'Clone',
  drag_topic_tooltip: 'Click to edit or drag & drop to reorder topic.',
  invalidDate: 'Invalid date',
  badPassword: 'min. 8 characters, 1 capital letter, 1 special character (!@#$%^&*))',
  product_widget_title: 'Product Attibutes',
  product_widget_tooltip: 'All attributes below are related only to product',
  course_guide_title: 'Not sure how to create a course?',
  course_guide_text: 'Check out our guide and learn how to do it.',
  global_settings_alert_title: 'Add global settings',
  global_settings_alert_description:
    'Global settings are used to share data in entire LMS. You can add global settings by clicking the button below.',
  go_to_platform: 'Go to the your platform',
  manage_course: 'Manage course',
  tutorial: 'Tutorial',
  tutorial_card_left_title: 'You’re ready to share your knowledge.',
  tutorial_card_left_description:
    'Use our best practices and recommendations to plan, produce, and publish a substantive, high-quality course.',
  tutorial_card_right_title: 'Not sure how to create a course?',
  tutorial_card_right_description: 'Check out our guide and learn how to do it.',
  learn_more: 'Learn more',
  your_courses: 'Your courses',
  ratings: 'Ratings',
  ratings_description: 'Measure the rating given to your courses',
  unverified: 'Unverified',
  download: 'Download',
  newTranslation: 'New Translation',
  documentation: 'Documentation',
  hall_of_fame: 'Hall of fame',
  current_user_status: 'Current user status',
  public_course: 'Public',
  no_pricing: 'No Price/Access',
  public_label: 'Is public (available free of charge)',
  public_tooltip: ' Course is accessible to anyone without having account ',
  changesToBeApproved: 'Changes to be approved',
  orderHasBeenChanged: 'The order has been changed',
  or: 'or',
  no_base_url: "Value of 'return_url' is not set. Go to: ",
  max_attempts: 'Max attempts',
  max_execution_time: 'Max execution time',
  status_consultation_tooltip: 'Status',
  tutor_consultation_tooltip: 'Tutor',
  proposed_terms_tooltip: 'Proposed terms',
  quiz_reports: 'Quiz Reports',
  details: 'Details',
  uncompleted: 'Uncompleted',
  student: 'Student',
  result_score: 'Result score',
  max_score: 'Max score',
  gift_quiz: 'GIFT Quiz',
  quiz_report_details: 'Quiz report details',
  'gift_type.multiple_choice': 'Multiple choice',
  'gift_type.multiple_choice_with_multiple_right_answers':
    'Multiple choice with multiple right answers',
  'gift_type.true_false': 'True & False',
  'gift_type.matching': 'Matching',
  'gift_type.numerical_question': 'Numerical question',
  'gift_type.essay': 'Essay',
  'gift_type.description': 'Description',
  'gift_type.short_answers': 'Short answers',
  possible_score: 'Possible score',
  possible_answers: 'Possible answers',
  student_score: 'Student score',
  student_answer: 'Student answer',
  true_answer: 'True',
  false_answer: 'False',
  possible_true_false: 'True, False',
  matching_questions: 'Matching questions',
  matching_answers: 'Matching answers',
  student_didnt_answer: "Student didn't answer this question",
  'User Not Found': 'User not found',
  notify_users: 'Users to notify',
  notify_users_tooltip: 'Indicate which users should be notified about project upload',
  root: 'Root',
  'Product Not Found': 'Produkt nie został znaleziony',
  'Consultation Not Found': 'Consultation Not Found',
  'Order Not Found': 'Order Not Found',
  field_required: 'Field is required',
  number_between: 'Field must have value between {min} and {max}',
  must_be_a_number: 'Field value must be a number',
  add_title_here: 'Add title here',
  user_projects: 'User projects',
  project_solutions: 'User project solutions',
  'Course cloning started. This may take a while.': 'Course cloning started. This may take a while',
  'Course deleted successfully': 'Course deleted successfully',
  'Course imported successfully': 'Course imported successfully',
  'Course updated successfully': 'Course updated successfully',
  'Export created': 'File exported successfully',
  'QuestionType.rate': 'Question',
  'QuestionType.text': 'Text',
  'QuestionType.review': 'Review (rating + comment)',
  'model.boolean': 'Single choose field',
  'model.number': 'Numeric field',
  'model.varchar': 'Text field (varchar)',
  'model.text': 'Text field',
  'model.json': 'JSON',
  'course.finished': 'Course finish',
  'course.attempt_number': 'Attempt number',
  'course.another_attempts': 'Another attempts',
  'course.interactions_time_in_days': 'Time spend on interactions in particular days',
  'TeacherSubjects.Exams.exam_date': 'Exam date',
  'TeacherSubjects.Exams.grade_weight': 'Weight',
  'SemesterType.winter': 'Winter {year}',
  'SemesterType.summer': 'Summer {year}',
  'ExamGradeType.manual': 'Manual',
  'ExamGradeType.teams_forms': 'MS Teams Forms',
  'ExamGradeType.teams_lecture': 'MS Teams Lecture',
  'ExamGradeType.test_portal': 'Test Portal',
  'TeacherSubjects.Exams.results': 'Results',
  'TeacherSubjects.Exams.manualConvert': 'Select the groups you want to assign grades to',
  'TeacherSubjects.Exams.teams_formsConvert': 'Upload MS Teams Forms XLSX file',
  'TeacherSubjects.Exams.teams_lectureConvert': 'Upload MS Teams Lecture file',
  'TeacherSubjects.Exams.test_portalConvert': 'Upload Test Portal XLSX file',
  degree: 'Degree',
  grade: 'Grade',
  max_percent: 'Max percent (%)',
  min_percent: 'Min percent (%)',
  'TeacherSubjects.FinalGrades.Student': 'Student: {first_name} {last_name}',
  'TeacherSubjects.FinalGrades.StudentPartialGrades': `Partial grades`,
  'TeacherSubjects.FinalGrades.Attendance': 'Attendance',
  'TeacherSubjects.FinalGrades.Attendances': 'Attendances',
  'TeacherSubjects.FinalGrades.FinalGrades': 'Final grades',
  'TeacherSubjects.FinalGrades.GradesScale': 'Grades scale for subject',
  'TeacherSubjects.FinalGrades.CoursesProgress': 'Courses progress',
  'TeacherSubjects.FinalGrades.GradeTerm': 'Due date',
  'TeacherSubjects.FinalGrades.FinalGrade': 'Final grade',
  'TeacherSubjects.FinalGrades.ProposedGrade': 'Proposed grade: {grade}',
  'TeacherSubjects.FinalGrades.IssueAssessment': 'Issue an assessment',
  date: 'Date',
  issued_at: 'Issued at',
  icon: 'Icon',
  approved: 'Approved',
  pending: 'Pending',
  extra_data: 'Extra data',
  show: 'Show',
  phone_number: 'Phone number',
  contact_details: 'Contact details',
  assigned: 'Assigned',
  completed_at: 'Completed at',
  Finished: 'Finished:',
  Started: 'Started:',
  NotStarted: 'Not started:',
  ShowMinutes: 'Show minutes spent on topic:',
  sent: 'Sent',
  accepted: 'Accepted',
  rejected: 'Rejected',
  'confirmModal.title': 'Confirm changes',
  'confirmModal.content': 'If you want to go to the next tab, save the current changes',
  read_all: 'Read all',
  new_lessons_cant_be_moved: "New lesson can't be moved",
  topics_cant_be_nested: "Topics can't be nested",
  topic_cant_be_in_root: 'Topic must be lesson children',
  lessons_and_topics_cant_be_mixed: "Lessons and topics can't be arranged alternately",
  stacking_order: 'Order',
  stacking_order_tooltip: 'Lesson order in lesson or course context',
  exportData: 'Export data',
  created_by: 'Created by',
  exported_at: 'Exported at',
  exported_by: 'Exported by',
  examTitleWithWeight: '{title} (weight: {weight}%)',
  classRegisterTitleWithGroupName: 'Class register of group {groupName}',
};
